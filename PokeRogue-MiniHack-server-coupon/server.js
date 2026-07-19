const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { createClient } = require("@supabase/supabase-js");
const path = require("path");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ==========================================
// [엄격한 검증] .env 환경 변수 확인
// ==========================================
const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!PORT || !ADMIN_PASSWORD || !JWT_SECRET || !SUPABASE_URL || !SUPABASE_KEY) {
  console.error("❌ 서버 시작 실패: .env 설정 설정 값이 누락되었습니다.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

/**
 * 1. 관리자 세션 대시보드 로그인
 */
app.post("/api/admin/login", (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    const adminToken = jwt.sign({ role: "admin" }, JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.json({ success: true, adminToken });
  }
  return res
    .status(401)
    .json({ success: false, message: "비밀번호가 틀렸습니다." });
});

/**
 * [신규 추가] 1-2. 모든 쿠폰 데이터 목록 실시간 조회 (최신순 정렬)
 */
app.get("/api/admin/coupons", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ message: "권한이 없습니다." });

  try {
    const decoded = jwt.verify(authHeader, JWT_SECRET);
    if (decoded.role !== "admin")
      return res.status(403).json({ message: "권한이 없습니다." });

    // Supabase에서 최신 등록된 순서대로 정렬하여 쿼리
    const { data: coupons, error } = await supabase
      .from("coupons")
      .select("*")
      .order("id", { ascending: false }); // id 혹은 created_at 기준 내림차순 정렬

    if (error) throw error;

    return res.json({ success: true, coupons });
  } catch (err) {
    console.error(err);
    return res
      .status(401)
      .json({ message: "인증 실패 또는 데이터베이스 통신 에러" });
  }
});

/**
 * 2. 일회성 보안 허용 라이선스 쿠폰 생성 발급
 */
app.post("/api/admin/generate-coupon", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ message: "권한이 없습니다." });

  try {
    const decoded = jwt.verify(authHeader, JWT_SECRET);
    if (decoded.role !== "admin")
      return res.status(403).json({ message: "권한이 없습니다." });

    const { customCode, durationSeconds, allowedFeatures } = req.body;
    if (
      !customCode ||
      durationSeconds === undefined ||
      !allowedFeatures ||
      !Array.isArray(allowedFeatures)
    ) {
      return res
        .status(400)
        .json({ message: "필수 데이터 누락 또는 포맷 에러" });
    }

    const upperCode = customCode.trim().toUpperCase();

    const { data: existingCoupon } = await supabase
      .from("coupons")
      .select("coupon_code")
      .eq("coupon_code", upperCode)
      .maybeSingle();

    if (existingCoupon) {
      return res
        .status(400)
        .json({ message: "이미 존재하는 쿠폰 코드입니다." });
    }

    const { error: insertError } = await supabase.from("coupons").insert([
      {
        coupon_code: upperCode,
        duration_seconds: parseInt(durationSeconds, 10),
        allowed_features: allowedFeatures,
        is_used: false,
      },
    ]);

    if (insertError) throw insertError;

    res.json({ success: true, coupon: upperCode });
  } catch (err) {
    res
      .status(401)
      .json({ message: "인증 토큰 오류 또는 데이터베이스 처리 실패" });
  }
});

/**
 * 3. 확장 스크립트 라이선스 검증 동기화 엔드포인트
 */
app.post("/api/license/redeem", async (req, res) => {
  const { couponCode } = req.body;
  if (!couponCode)
    return res
      .status(400)
      .json({ valid: false, message: "코드를 입력해주세요." });

  const upperCode = couponCode.trim().toUpperCase();

  try {
    const { data: coupon, error } = await supabase
      .from("coupons")
      .select("*")
      .eq("coupon_code", upperCode)
      .maybeSingle();

    if (error || !coupon) {
      return res
        .status(404)
        .json({ valid: false, message: "존재하지 않는 쿠폰입니다." });
    }

    if (coupon.is_used) {
      return res
        .status(400)
        .json({ valid: false, message: "이미 사용된 쿠폰 코드입니다." });
    }

    const { error: updateError } = await supabase
      .from("coupons")
      .update({ is_used: true, used_at: new Date().toISOString() })
      .eq("id", coupon.id);

    if (updateError) throw updateError;

    const clientToken = jwt.sign(
      { features: coupon.allowed_features },
      JWT_SECRET,
      { expiresIn: parseInt(coupon.duration_seconds, 10) },
    );

    res.json({
      valid: true,
      token: clientToken,
      features: coupon.allowed_features,
      durationMinutes: parseFloat((coupon.duration_seconds / 60).toFixed(2)),
      durationSeconds: coupon.duration_seconds,
    });
  } catch (err) {
    res
      .status(500)
      .json({
        valid: false,
        message: "서버 내부 처리 중 오류가 발생했습니다.",
      });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server strictly running on port ${PORT}`),
);

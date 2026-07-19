const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { createClient } = require("@supabase/supabase-js");
const path = require("path");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!PORT || !ADMIN_PASSWORD || !JWT_SECRET || !SUPABASE_URL || !SUPABASE_KEY) {
  console.error("❌ 서버 시작 실패: .env 설정 값이 누락되었습니다.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

// 1. 관리자 세션 대시보드 로그인
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

// 1-2. 모든 쿠폰 데이터 목록 실시간 조회
app.get("/api/admin/coupons", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ message: "권한이 없습니다." });
  try {
    const decoded = jwt.verify(authHeader, JWT_SECRET);
    if (decoded.role !== "admin")
      return res.status(403).json({ message: "권한이 없습니다." });

    const { data: coupons, error } = await supabase
      .from("coupons")
      .select("*")
      .order("id", { ascending: false });

    if (error) throw error;
    return res.json({ success: true, coupons });
  } catch (err) {
    return res
      .status(401)
      .json({ message: "인증 실패 또는 데이터베이스 에러" });
  }
});

// 2. 일회성 보안 허용 라이선스 쿠폰 생성 발급
app.post("/api/admin/generate-coupon", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ message: "권한이 없습니다." });
  try {
    const decoded = jwt.verify(authHeader, JWT_SECRET);
    if (decoded.role !== "admin")
      return res.status(403).json({ message: "권한이 없습니다." });

    const { customCode, durationSeconds, allowedFeatures } = req.body;
    const upperCode = customCode.trim().toUpperCase();

    const { data: existingCoupon } = await supabase
      .from("coupons")
      .select("coupon_code")
      .eq("coupon_code", upperCode)
      .maybeSingle();

    if (existingCoupon)
      return res
        .status(400)
        .json({ message: "이미 존재하는 쿠폰 코드입니다." });

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
    res.status(500).json({ message: "데이터베이스 처리 실패" });
  }
});

/**
 * 3. [변경됨] 쿠폰 코드를 입력하여 15자리의 랜덤 유저 UID 발급 받기
 */
app.post("/api/license/exchange-uid", async (req, res) => {
  const { couponCode } = req.body;
  if (!couponCode)
    return res
      .status(400)
      .json({ valid: false, message: "쿠폰 코드를 입력하세요." });

  const upperCode = couponCode.trim().toUpperCase();

  try {
    const { data: coupon, error } = await supabase
      .from("coupons")
      .select("*")
      .eq("coupon_code", upperCode)
      .maybeSingle();

    if (error || !coupon)
      return res
        .status(404)
        .json({ valid: false, message: "존재하지 않는 쿠폰입니다." });
    if (coupon.is_used)
      return res
        .status(400)
        .json({ valid: false, message: "이미 사용된 쿠폰입니다." });

    // 6자리 랜덤 대문자/숫자 조합 생성하여 총 15자리 UID 포맷 확정 (ROGUE-UID[XXXXXX])
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randStr = "";
    for (let i = 0; i < 6; i++) {
      randStr += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    // 요청하신 포맷: ROGUE-UID + 6자리 랜덤 문자 = 총 15자리
    const userUid = `ROGUE-UID${randStr}`.substring(0, 15); // 정확히 15글자 제한 절삭

    const expiresAt = new Date(
      Date.now() + coupon.duration_seconds * 1000,
    ).toISOString();

    // 트랜잭션 성격의 동시 처리: 쿠폰 사용 표시 및 UID 라이선스 등록
    await supabase
      .from("coupons")
      .update({ is_used: true, used_at: new Date().toISOString() })
      .eq("id", coupon.id);
    await supabase.from("user_licenses").insert([
      {
        user_uid: userUid,
        associated_coupon: upperCode,
        features: coupon.allowed_features,
        expires_at: expiresAt,
      },
    ]);

    res.json({
      valid: true,
      userUid: userUid,
      message: "유저 UID 발급 성공",
    });
  } catch (err) {
    res
      .status(500)
      .json({ valid: false, message: "서버 처리 오류가 발생했습니다." });
  }
});

/**
 * 4. [변경됨] 발급된 UID를 통해 인게임 오버레이 대시보드 검증 및 런타임 진입
 */
app.post("/api/license/verify-uid", async (req, res) => {
  const { userUid } = req.body;
  if (!userUid)
    return res
      .status(400)
      .json({ valid: false, message: "UID를 입력해주세요." });

  try {
    const { data: license, error } = await supabase
      .from("user_licenses")
      .select("*")
      .eq("user_uid", userUid.trim())
      .maybeSingle();

    if (error || !license)
      return res
        .status(404)
        .json({ valid: false, message: "등록되지 않은 안전 인증 UID입니다." });

    const isExpired = new Date(license.expires_at).getTime() < Date.now();
    if (isExpired)
      return res
        .status(400)
        .json({ valid: false, message: "이용 시간이 만료된 세션 UID입니다." });

    const remainSec = Math.floor(
      (new Date(license.expires_at).getTime() - Date.now()) / 1000,
    );
    const clientToken = jwt.sign(
      { features: license.features, uid: license.user_uid },
      JWT_SECRET,
      { expiresIn: remainSec },
    );

    res.json({
      valid: true,
      token: clientToken,
      features: license.features,
      durationMinutes: parseFloat((remainSec / 60).toFixed(2)),
    });
  } catch (err) {
    res.status(500).json({ valid: false, message: "인증 처리 오류" });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server strictly running on port ${PORT}`),
);

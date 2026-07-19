const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { createClient } = require('@supabase/supabase-js');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ==========================================
// [엄격한 검증] .env 환경 변수 확인
// ==========================================
const PORT = process.env.PORT;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!PORT || !ADMIN_PASSWORD || !JWT_SECRET || !SUPABASE_URL || !SUPABASE_KEY) {
    console.error("❌ 서버 시작 실패: .env 설정 설정 값이 누락되었습니다.");
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

/**
 * 1. 관리자 로그인
 */
app.post('/api/admin/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        const adminToken = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '1d' });
        return res.json({ success: true, adminToken });
    }
    return res.status(401).json({ success: false, message: "비밀번호가 틀렸습니다." });
});

/**
 * 2. 관리자 쿠폰 생성 (초 단위 반영)
 */
app.post('/api/admin/generate-coupon', async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(403).json({ message: "권한이 없습니다." });

    try {
        const decoded = jwt.verify(authHeader, JWT_SECRET);
        if (decoded.role !== 'admin') return res.status(403).json({ message: "권한이 없습니다." });

        const { customCode, durationSeconds, allowedFeatures } = req.body;

        if (!customCode || durationSeconds === undefined || !allowedFeatures || !Array.isArray(allowedFeatures)) {
            return res.status(400).json({ message: "필수 데이터 누락 또는 포맷 에러" });
        }

        const upperCode = customCode.trim().toUpperCase();

        // 중복 체크
        const { data: existingCoupon } = await supabase
            .from('coupons')
            .select('coupon_code')
            .eq('coupon_code', upperCode)
            .maybeSingle();

        if (existingCoupon) {
            return res.status(400).json({ message: "이미 존재하는 쿠폰 코드입니다." });
        }

        // DB 컬럼 매핑: duration_seconds 변경 적용
        const { error: insertError } = await supabase
            .from('coupons')
            .insert([{
                coupon_code: upperCode,
                duration_seconds: parseInt(durationSeconds, 10),
                allowed_features: allowedFeatures,
                is_used: false
            }]);

        if (insertError) throw insertError;

        res.json({ success: true, coupon: upperCode });
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: "인증 토큰 오류 또는 데이터베이스 처리 실패" });
    }
});

/**
 * 3. 클라이언트 라이선스 인증 및 발급 (정밀 초 단위 만료 적용)
 */
app.post('/api/license/redeem', async (req, res) => {
    const { couponCode } = req.body;
    if (!couponCode) return res.status(400).json({ valid: false, message: "코드를 입력해주세요." });

    const upperCode = couponCode.trim().toUpperCase();

    try {
        const { data: coupon, error } = await supabase
            .from('coupons')
            .select('*')
            .eq('coupon_code', upperCode)
            .maybeSingle();

        if (error || !coupon) {
            return res.status(404).json({ valid: false, message: "존재하지 않는 쿠폰입니다." });
        }

        if (coupon.is_used) {
            return res.status(400).json({ valid: false, message: "이미 사용된 쿠폰 코드입니다." });
        }

        // 사용 완료 락킹
        const { error: updateError } = await supabase
            .from('coupons')
            .update({ is_used: true, used_at: new Date().toISOString() })
            .eq('id', coupon.id);

        if (updateError) throw updateError;

        // jwt.sign의 expiresIn에 단독 숫자(정수) 입력 시 '초(seconds)' 단위로 연산 처리됨
        const clientToken = jwt.sign(
            { features: coupon.allowed_features },
            JWT_SECRET,
            { expiresIn: parseInt(coupon.duration_seconds, 10) }
        );

        // 클라이언트가 연산하기 편하도록 분 단위 소수점 데이터도 같이 리턴
        res.json({
            valid: true,
            token: clientToken,
            features: coupon.allowed_features,
            durationMinutes: parseFloat((coupon.duration_seconds / 60).toFixed(2)),
            durationSeconds: coupon.duration_seconds
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ valid: false, message: "서버 내부 처리 중 오류가 발생했습니다." });
    }
});

app.listen(PORT, () => console.log(`🚀 Server strictly running on port ${PORT}`));
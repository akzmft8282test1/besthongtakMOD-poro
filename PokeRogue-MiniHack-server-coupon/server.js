const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { createClient } = require('@supabase/supabase-js');
const path = require('path');

// 로컬 환경 변수(.env 파일) 로드용
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ==========================================
// [엄격한 검증] .env에 필수 값이 없으면 즉시 에러 발생 및 종료
// ==========================================
const PORT = process.env.PORT;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!PORT || !ADMIN_PASSWORD || !JWT_SECRET || !SUPABASE_URL || !SUPABASE_KEY) {
    console.error("❌ 서버 시작 실패: .env 파일에 누락된 설정 값이 존재합니다.");
    console.error(`- PORT: ${PORT ? 'OK' : 'MISSING'}`);
    console.error(`- ADMIN_PASSWORD: ${ADMIN_PASSWORD ? 'OK' : 'MISSING'}`);
    console.error(`- JWT_SECRET: ${JWT_SECRET ? 'OK' : 'MISSING'}`);
    console.error(`- SUPABASE_URL: ${SUPABASE_URL ? 'OK' : 'MISSING'}`);
    console.error(`- SUPABASE_KEY: ${SUPABASE_KEY ? 'OK' : 'MISSING'}`);
    process.exit(1);
}

// Supabase 클라이언트 초기화
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ==========================================
// [해결] 루트 경로(/) 접근 시 admin.html을 보여주거나 안내문 출력
// ==========================================
// 만약 server.js와 같은 폴더에 admin.html이 있다면 아래 코드를 쓰세요:
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// 만약 html을 따로 띄우지 않고 메시지만 주려면 아래 주석을 풀고 위 get을 지우세요.
// app.get('/', (req, res) => { res.send('🚀 PokeRogue 라이선스 서버가 정상 구동 중입니다.'); });


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
 * 2. 관리자 쿠폰 생성 (Supabase DB 저장)
 */
app.post('/api/admin/generate-coupon', async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(403).json({ message: "권한이 없습니다." });

    try {
        const decoded = jwt.verify(authHeader, JWT_SECRET);
        if (decoded.role !== 'admin') return res.status(403).json({ message: "권한이 없습니다." });

        const { customCode, durationMinutes, allowedFeatures } = req.body;

        if (!customCode || !durationMinutes || !allowedFeatures) {
            return res.status(400).json({ message: "필수 입력 값이 누락되었습니다." });
        }

        const upperCode = customCode.trim().toUpperCase();

        // [DB 연동] 중복 쿠폰 체크
        const { data: existingCoupon } = await supabase
            .from('coupons')
            .select('coupon_code')
            .eq('coupon_code', upperCode)
            .maybeSingle();

        if (existingCoupon) {
            return res.status(400).json({ message: "이미 존재하는 쿠폰 코드입니다." });
        }

        // [DB 연동] 영구 저장소 레코드 삽입
        const { error: insertError } = await supabase
            .from('coupons')
            .insert([{
                coupon_code: upperCode,
                duration_minutes: parseInt(durationMinutes, 10),
                allowed_features: allowedFeatures,
                is_used: false
            }]);

        if (insertError) throw insertError;

        res.json({ success: true, coupon: upperCode });
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: "인증 토큰이 유효하지 않거나 DB 처리 오류입니다." });
    }
});

/**
 * 3. 클라이언트 라이선스 인증 및 1회성 검증 (Supabase 동기화)
 */
app.post('/api/license/redeem', async (req, res) => {
    const { couponCode } = req.body;
    if (!couponCode) return res.status(400).json({ valid: false, message: "코드를 입력해주세요." });

    const upperCode = couponCode.trim().toUpperCase();

    try {
        // [DB 연동] 쿠폰 레코드 조회
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

        // [DB 연동 핵심] 중복 사용 방지를 위해 사용 완료 상태 즉시 수정
        const { error: updateError } = await supabase
            .from('coupons')
            .update({ 
                is_used: true, 
                used_at: new Date().toISOString() 
            })
            .eq('id', coupon.id);

        if (updateError) throw updateError;

        // 기간 한정 클라이언트 전용 JWT 토큰 서명
        const clientToken = jwt.sign(
            { features: coupon.allowed_features },
            JWT_SECRET,
            { expiresIn: `${coupon.duration_minutes}m` }
        );

        res.json({
            valid: true,
            token: clientToken,
            features: coupon.allowed_features,
            durationMinutes: coupon.duration_minutes
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ valid: false, message: "서버 혹은 데이터베이스 내부 처리 중 오류가 발생했습니다." });
    }
});

app.listen(PORT, () => console.log(`🚀 Server strictly running on port ${PORT}`));
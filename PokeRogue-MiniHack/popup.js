document.getElementById("pop-btn").onclick = async function () {
  const couponCode = document.getElementById("pop-coupon").value.trim();
  if (!couponCode) return alert("쿠폰 코드를 입력하십시오.");

  const SERVER_URL = "https://besthongtak-control-server.onrender.com";
  try {
    const res = await fetch(`${SERVER_URL}/api/license/exchange-uid`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ couponCode }),
    });
    const data = await res.json();

    // 1. 이미 사용된 쿠폰인 경우 (is_used: true)
    if (data.is_used) {
      alert(
        `⚠️ 알림: [${couponCode}] 쿠폰은 이미 사용된 상태입니다.\n기존 UID: ${data.userUid || "알 수 없음"}`,
      );
      return;
    }

    // 2. 정상적으로 UID가 발급된 경우
    if (data.valid) {
      const uid = data.userUid;

      // 클립보드 자동 복사 실행
      navigator.clipboard
        .writeText(uid)
        .then(() => {
          alert(
            `🎉 인증 완료!\n\n쿠폰 [${couponCode}]을 사용하여 UID가 발급되었습니다.\n\n발급된 UID: [ ${uid} ]\n(클립보드에 자동 복사되었습니다.)`,
          );
        })
        .catch(() => {
          alert(
            `🎉 인증 완료! UID가 발급되었습니다.\n\n[ ${uid} ]\n(자동 복사 실패: 수동으로 복사하세요.)`,
          );
        });
    } else {
      // 3. 쿠폰이 유효하지 않은 경우
      alert(`❌ 오류: ${data.message || "유효하지 않은 쿠폰입니다."}`);
    }
  } catch (e) {
    alert("서버 연결 실패. 네트워크 상태를 확인하세요.");
  }
};

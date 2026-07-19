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
    if (data.valid) {
      // 클립보드에 강제 보관 및 Alert 처리 완료
      navigator.clipboard
        .writeText(data.userUid)
        .then(() => {
          alert(
            `🎉 인증 완료! 유저 UID가 발급 및 자동 복사되었습니다.\n\n[ ${data.userUid} ]\n\n게임 내부 대시보드의 입력 칸에 붙여넣어 활성화하세요.`,
          );
        })
        .catch(() => {
          alert(
            `발급 성공 (자동복사 오류): 수동 복사하세요.\nUID: ${data.userUid}`,
          );
        });
    } else {
      alert(`❌ 오류: ${data.message}`);
    }
  } catch (e) {
    alert("서버 연결 실패. 네트워크 상태를 파악하세요.");
  }
};

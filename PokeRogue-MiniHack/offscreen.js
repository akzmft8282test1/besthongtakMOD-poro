chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "RENDER_SVG") {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    // SVG 소스코드를 안전하게 Data URL로 변환
    const svgBlob = new Blob([request.svg], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.clearRect(0, 0, 32, 32);
      ctx.drawImage(img, 0, 0, 32, 32);

      // 캔버스의 픽셀 데이터를 추출하여 보냄 (서비스 워커가 인식 가능한 유일한 포맷)
      const imageData = ctx.getImageData(0, 0, 32, 32);
      sendResponse({ success: true, pixels: Array.from(imageData.data) });
      URL.revokeObjectURL(url);
    };

    img.onerror = () => {
      sendResponse({ success: false });
      URL.revokeObjectURL(url);
    };

    img.src = url;
    return true; // 비동기 응답 처리용
  }
});

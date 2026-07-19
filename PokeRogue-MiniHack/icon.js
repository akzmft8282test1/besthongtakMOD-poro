// 배경이 투명한 네온 오렌지 SVG 소스코드를 크롬 엔진이 인식할 수 있도록 변환
const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="neonOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffb800" />
      <stop offset="50%" stop-color="#ff7a00" />
      <stop offset="100%" stop-color="#e0681a" />
    </linearGradient>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComponentTransfer in="blur" result="glowAlpha">
        <feFuncA type="linear" slope="0.6"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode in="glowAlpha" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <path d="M 15,35 L 35,35 L 48,48 M 113,93 L 93,93 L 80,80" stroke="#ff7a00" stroke-width="2" stroke-opacity="0.4" stroke-dasharray="4,4" fill="none" />
  <g transform="translate(0, 2)">
    <path d="M 24,62 A 40,40 0 0,1 104,62 Z" fill="url(#neonOrange)" filter="url(#glow)" />
    <path d="M 24,66 A 40,40 0 0,0 104,66 Z" fill="#161b22" stroke="#30363d" stroke-width="2" fill-opacity="0.9" />
    <rect x="20" y="61" width="88" height="6" fill="#0c0f12" rx="3" />
    <circle cx="64" cy="64" r="16" fill="#0c0f12" stroke="#ff7a00" stroke-width="3" filter="url(#glow)" />
    <circle cx="64" cy="64" r="8" fill="#fff" />
    <path d="M 56,12 L 72,12 L 68,20 L 60,20 Z" fill="#ff7a00" filter="url(#glow)" />
  </g>
</svg>
`.trim();

// 크롬이 인지할 수 있는 인코딩 데이터로 변환 후 액션 아이콘으로 동적 강제 바인딩
const iconData =
  "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgIcon)));
chrome.action.setIcon({ path: iconData });

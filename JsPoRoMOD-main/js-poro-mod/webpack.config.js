const path = require("path");

module.exports = {
  // production 모드로 빌드하여 공백 제거 및 자동 압축(Minify)을 진행합니다.
  mode: "production",

  // 메인 진입점 파일 지정
  entry: "./decompiled_code/deobfuscated.js",

  output: {
    // 요청하신 파일명으로 빌드 결과물 지정
    filename: "mod.min.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // 빌드 시 dist 폴더 내 이전 파일 정리

    library: {
      name: "PokeRogueMOD",
      type: "umd",
      export: "default",
    },
    globalObject: "this",
  },

  // 웹팩이 모듈을 해석할 때 확장자가 없어도 자동으로 .js를 찾도록 설정합니다.
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      // 혹시 모를 상대 경로 탐색 오류 방지
      "@": path.resolve(__dirname, "decompiled_code"),
    },
  },

  performance: {
    hints: false,
  },
};

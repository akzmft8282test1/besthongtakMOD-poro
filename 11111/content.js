// ==========================================
// 1. 인게임 Phaser 컨텍스트 접근 헬퍼 함수
// ==========================================
function getBattleScene() {
    try {
        return window.Phaser.Display.Canvas.CanvasPool.pool[0].parent.game.scene.keys.battle;
    } catch (e) {
        alert("게임이 완전히 로드된 후 전투 화면에서 실행해주세요!");
        return null;
    }
}

// ==========================================
// 2. 핵심 치트 기능 정의
// ==========================================

// [치트 1] 100% 이로치 (빛나는 부적 20스택 강제 적용)
async function setMaxShinyRate() {
    const battleScene = getBattleScene();
    if (!battleScene) return;

    const modifiers = battleScene.modifiers;
    const searchString = "modifierType:ModifierType.SHINY_CHARM";
    const maxStackCount = 20;

    let index = modifiers.findIndex(
        ({ type: { localeKey } }) => localeKey === searchString
    );

    if (index === -1) {
        // 부적이 없을 경우 콘솔 경고 후 안전하게 추가 시도 (Native API 활용)
        try {
            const shinyCharmModifier = new window.PokeRogue.modifier.ShinyRateBoosterModifier(
                window.PokeRogue.modifier.modifierTypes.SHINY_CHARM()
            );
            
            // 아이템 플레이어에게 주입
            await battleScene.updateModifiers(true, true);
            await battleScene.addModifier(shinyCharmModifier, false, false, false, true);
            await battleScene.updateModifiers(true, true);

            index = modifiers.findIndex(
                ({ type: { localeKey } }) => localeKey === searchString
            );
        } catch (err) {
            console.error("빛나는부적 강제 생성 실패. 상점에서 1개 획득 후 시도해 보세요.", err);
            alert("인벤토리에 빛나는부적이 없습니다. 안전을 위해 먼저 상점에서 부적을 1개 이상 획득해 주세요!");
            return;
        }
    }

    if (index !== -1) {
        modifiers[index].stackCount = maxStackCount;
        await battleScene.updateModifiers(true, true);
        alert(`✨ 이로치 확률 100% 적용 완료! (Shiny Charm ${maxStackCount}스택)`);
    }
}

// [치트 2] 즉시 부화 및 전설 알 핵
function applyEggHack(tier = 3, gachaType = 1) {
    const battleScene = getBattleScene();
    if (!battleScene) return;

    const eggs = battleScene.gameData.eggs;
    if (!eggs || eggs.length === 0) {
        alert("보유 중인 알이 없습니다. 알 뽑기를 진행한 뒤 클릭해 주세요!");
        return;
    }

    eggs.forEach(egg => {
        egg.tier = tier;          // 3: 전설등급 (Legendary)
        egg.gachaType = gachaType;  // 1: 전설가챠 (Legendary Gacha)
        egg.hatchWaves = 0;       // 0: 다음 웨이브에 즉시 부화
    });

    alert(`🥚 보유한 모든 알을 즉시 부화 대기 상태(전설 등급)로 변경했습니다!`);
}


// ==========================================
// 3. 치트 조작용 Floating UI 동적 생성 및 스타일
// ==========================================
function createMiniHackUI() {
    // 1) UI 감싸는 컨테이너 생성
    const container = document.createElement("div");
    container.id = "mini-hack-container";
    container.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        z-index: 99999;
        background: rgba(20, 20, 20, 0.9);
        border: 2px solid #e0681a;
        border-radius: 10px;
        padding: 15px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        color: white;
        font-family: sans-serif;
        width: 220px;
        transition: opacity 0.3s;
    `;

    // 헤더 타이틀 및 미니 드래그 핸들
    const header = document.createElement("div");
    header.innerText = "PokeRogue Mini-Hack 👑";
    header.style.cssText = "font-weight: bold; margin-bottom: 12px; text-align: center; border-bottom: 1px solid #555; padding-bottom: 5px; cursor: move;";
    container.appendChild(header);

    // 버튼 생성 함수
    function createButton(text, onClick, color = "#e0681a") {
        const btn = document.createElement("button");
        btn.innerText = text;
        btn.style.cssText = `
            width: 100%;
            padding: 8px;
            margin-bottom: 8px;
            background: ${color};
            border: none;
            color: white;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        `;
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            onClick();
        });
        return btn;
    }

    // 엘리먼트 추가
    container.appendChild(createButton("✨ 100% 이로치 활성화", setMaxShinyRate, "#8a2be2"));
    container.appendChild(createButton("🥚 모든 알 즉시 전설화", () => applyEggHack(3, 1), "#d2691e"));
    container.appendChild(createButton("🐣 단순 즉시 부화 (0웨이브)", () => applyEggHack(undefined, undefined), "#2e8b57"));

    // 2) 토글(대문) 버튼 생성 (개발자용 logoButton 역할)
    const toggleBtn = document.createElement("div");
    toggleBtn.innerText = "🛠️";
    toggleBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 100000;
        width: 50px;
        height: 50px;
        background: #e0681a;
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    `;

    // 토글 버튼 클릭 이벤트
    toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (container.style.display === "none") {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    });

    // 드래그 기능 (UI 가릴 때 위치 이동)
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - container.getBoundingClientRect().left;
        offsetY = e.clientY - container.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        container.style.left = `${e.clientX - offsetX}px`;
        container.style.top = `${e.clientY - offsetY}px`;
        container.style.bottom = "auto";
        container.style.right = "auto";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    // 바디에 주입
    document.body.appendChild(container);
    document.body.appendChild(toggleBtn);
}

// 게임이 실행된 후 UI 마운트
setTimeout(createMiniHackUI, 3000);
let currentScene = 'val_0';
let currentMethod = 'input';

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    generateSceneButtons();
    initializeTwentyTwenty();
});

// 动态生成场景按钮
function generateSceneButtons() {
    const sceneSelector = document.getElementById('sceneSelector');
    for (let i = 0; i < 90; i++) {
        const sceneName = `UIEB_val_${i}`;
        const button = document.createElement('button');
        button.innerHTML = `
            <img class="thumbnail" src="results/${sceneName}/input.png" alt="${sceneName}">
            <span>${sceneName}</span>
        `;
        button.onclick = () => changeScene(sceneName);
        sceneSelector.appendChild(button);
    }
}

// 更改场景
function changeScene(sceneName) {
    currentScene = sceneName;
    updateImages();
}

// 更改方法
function changeMethod(method) {
    currentMethod = method;
    updateImages();
}

// 更新图像
function updateImages() {
    const bottomImage = document.getElementById('bottomImage');
    const topImage = document.getElementById('topImage');

    bottomImage.src = `results/${currentScene}/ours.png`;
    topImage.src = `results/${currentScene}/${currentMethod}.png`;

    initializeTwentyTwenty();
}

// 初始化 TwentyTwenty 滑块插件
function initializeTwentyTwenty() {
    if ($.fn.twentytwenty) {
        $(".twentytwenty-container").twentytwenty({
            default_offset_pct: 0.5,
            orientation: 'horizontal',
            before_label: 'Ours',
            after_label: currentMethod,
            no_overlay: false,
        });
    } else {
        console.error("TwentyTwenty plugin is not loaded.");
    }
}

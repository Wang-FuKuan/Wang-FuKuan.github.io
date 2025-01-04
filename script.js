let currentScene = 1;
let currentMethod = 'input';

// 更改场景
function changeScene(sceneId) {
    currentScene = sceneId;
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

    bottomImage.src = images/scene${currentScene}/ours.png;
    topImage.src = images/scene${currentScene}/${currentMethod}.png;

    // 重新初始化 TwentyTwenty 插件
    initializeTwentyTwenty();
}

// 初始化 TwentyTwenty 滑块插件
function initializeTwentyTwenty() {
    if ($.fn.twentytwenty) {
        $(".twentytwenty-container").twentytwenty({
            default_offset_pct: 0.5,
            orientation: 'horizontal',
            before_label: 'Ours',
            after_label: 'Selected',
            no_overlay: false,
        });
    } else {
        console.error("TwentyTwenty plugin is not loaded.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeTwentyTwenty();
});

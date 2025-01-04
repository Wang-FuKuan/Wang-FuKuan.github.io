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

    bottomImage.src = `images/scene${currentScene}/ours.png`;
    topImage.src = `images/scene${currentScene}/${currentMethod}.png`;

    // 重新初始化 TwentyTwenty 插件
    initializeTwentyTwenty();
}

// 初始化 TwentyTwenty 滑块插件
function initializeTwentyTwenty() {
    $(".twentytwenty-container").twentytwenty({
        default_offset_pct: 0.5, // 默认滑块位置
        orientation: 'horizontal', // 滑块方向
        before_label: 'Ours', // 左侧标签
        after_label: 'Selected', // 右侧标签
        no_overlay: false, // 显示左右标签
    });
}

// 页面加载完成后初始化插件
document.addEventListener('DOMContentLoaded', () => {
    initializeTwentyTwenty();
});

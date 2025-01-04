let currentScene = 1; // 当前场景
let currentMethod = 'input'; // 当前方法

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

    // 更新底层和上层图像
    bottomImage.src = `images/scene${currentScene}/ours.png`;
    topImage.src = `images/scene${currentScene}/${currentMethod}.png`;

    // 调整展示区域高度
    adjustDisplayContainer();
}

// 动态调整展示区域高度
function adjustDisplayContainer() {
    const inputImage = new Image();
    inputImage.src = `images/scene${currentScene}/input.png`; // 使用当前场景的 input 图像
    inputImage.onload = function () {
        const aspectRatio = inputImage.width / inputImage.height; // 计算宽高比
        const displayContainer = document.querySelector(".twentytwenty-container");
        const newHeight = Math.round(displayContainer.offsetWidth / aspectRatio); // 根据宽高比计算高度
        displayContainer.style.height = `${newHeight}px`; // 设置高度
    };
}

// 初始化 TwentyTwenty 滑块插件
function initializeTwentyTwenty() {
    if ($.fn.twentytwenty) {
        $(".twentytwenty-container").twentytwenty({
            default_offset_pct: 0.5, // 默认滑块位置 50%
            orientation: 'horizontal', // 水平方向
            before_label: 'Ours', // 左侧标签
            after_label: 'Selected', // 右侧标签
            no_overlay: false, // 显示标签
        });
    } else {
        console.error("TwentyTwenty plugin is not loaded.");
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    adjustDisplayContainer(); // 初始化展示区域高度
    initializeTwentyTwenty(); // 初始化 TwentyTwenty 插件
});

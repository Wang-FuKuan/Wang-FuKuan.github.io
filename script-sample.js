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

    // 更新图像路径
    const bottomImageSrc = `images/scene${currentScene}/ours.png`;
    const topImageSrc = `images/scene${currentScene}/${currentMethod}.png`;

    bottomImage.src = bottomImageSrc;
    topImage.src = topImageSrc;

    // 强制设置图像大小为 800x800
    bottomImage.onload = () => {
        bottomImage.style.width = '800px';
        bottomImage.style.height = '800px';
    };
    topImage.onload = () => {
        topImage.style.width = '800px';
        topImage.style.height = '800px';
    };

    // 初始化 TwentyTwenty 插件
    initializeTwentyTwenty();
}

// 初始化 TwentyTwenty 滑块插件
function initializeTwentyTwenty() {
    if ($.fn.twentytwenty) {
        $(".twentytwenty-container").twentytwenty({
            default_offset_pct: 0.5, // 滑块默认位置
            orientation: 'horizontal', // 水平滑动
            before_label: 'Ours', // 左侧标签
            after_label: 'Selected', // 右侧标签
            no_overlay: false, // 隐藏叠加文本
        });
    } else {
        console.error("TwentyTwenty plugin is not loaded.");
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    updateImages(); // 加载默认图像
});

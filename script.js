let currentScene = 1;
let currentMethod = 'osmosis';

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
    const leftImage = document.getElementById('leftImage');
    const rightImage = document.getElementById('rightImage');

    leftImage.src = `images/scene${currentScene}/input.png`;
    rightImage.src = `images/scene${currentScene}/${currentMethod}.png`;
}

// 初始化 TwentyTwenty 滑块
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.twentytwenty-container');
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const offset = ((e.clientX - rect.left) / rect.width) * 100;
        document.getElementById('rightImage').style.clipPath = `inset(0 ${100 - offset}% 0 0)`;
    });
});

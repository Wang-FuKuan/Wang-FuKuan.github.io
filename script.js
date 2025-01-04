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
}

// 初始化滑块功能
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.twentytwenty-container');
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const offset = ((e.clientX - rect.left) / rect.width) * 100;
        document.getElementById('topImage').style.clipPath = `inset(0 ${100 - offset}% 0 0)`;
    });
});

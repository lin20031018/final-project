const marquee = document.querySelector('.marquee p');

function startMarquee() {
    marquee.style.animationPlayState = 'running';
}

function stopMarquee() {
    marquee.style.animationPlayState = 'paused';
}

// 調用函數來控制跑馬燈
// 例如：startMarquee(); // 開始跑馬燈
// stopMarquee(); // 暫停跑馬燈

const rocket = document.getElementById('pepe-rocket');
let angle = 0;
let radius = 0;
let isSpinning = false;

rocket.addEventListener('click', () => {
    isSpinning = !isSpinning;
});

function moveRocket() {
    if (isSpinning) {
        angle += 2;
        radius += 0.5;
        const x = 150 + radius * Math.cos(angle * Math.PI / 180);
        const y = 150 + radius * Math.sin(angle * Math.PI / 180);
        rocket.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    }
    requestAnimationFrame(moveRocket);
}

moveRocket();

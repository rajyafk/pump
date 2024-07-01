document.addEventListener('DOMContentLoaded', () => {
  const pepeRocketBtn = document.getElementById('pepe-rocket-btn');
  const pepeRocket = document.getElementById('pepe-rocket');
  const eggs = document.querySelectorAll('.hidden-egg');

  pepeRocketBtn.addEventListener('click', () => {
    pepeRocket.style.display = 'block';
    let angle = 0;

    const moveRocket = () => {
      angle += 0.05;
      pepeRocket.style.top = `${50 + 30 * Math.sin(angle)}%`;
      pepeRocket.style.left = `${50 + 30 * Math.cos(angle)}%`;
      requestAnimationFrame(moveRocket);
    };

    moveRocket();
  });

  eggs.forEach(egg => {
    egg.addEventListener('click', () => {
      alert('You found an Easter Egg!');
    });
  });
});

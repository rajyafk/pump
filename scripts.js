document.addEventListener('DOMContentLoaded', () => {
  const pepeRocketBtn = document.getElementById('pepe-rocket-btn');
  const pepeRocket = document.getElementById('pepe-rocket');
  const coinFlipBtn = document.getElementById('coin-flip-btn');
  const coin = document.getElementById('coin');
  
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

  coinFlipBtn.addEventListener('click', () => {
    coin.style.display = 'block';
    coin.style.transform = 'rotateY(1800deg)';

    setTimeout(() => {
      const result = Math.random() < 0.5 ? 'heads' : 'tails';
      coin.style.backgroundImage = `url('coin-${result}.png')`;
    }, 600);
  });

  // Confetti
  const confettiSettings = { target: 'confetti' };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  document.body.addEventListener('click', () => {
    confetti.clear();
    confetti.render();
  });

  // Chart.js
  const ctx = document.getElementById('priceChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Pump Coin Price',
        data: [10, 20, 15, 30, 25],
        borderColor: '#ff6699',
        backgroundColor: 'rgba(255, 102, 153, 0.5)',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

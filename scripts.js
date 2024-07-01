document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('hover');
        });
        button.addEventListener('mouseout', () => {
            button.classList.remove('hover');
        });
    });

    const pepeRocket = document.getElementById('pepeRocket');
    pepeRocket.addEventListener('click', () => {
        pepeRocket.classList.add('clicked');
        setTimeout(() => {
            pepeRocket.classList.remove('clicked');
        }, 5000); // Adjusted the duration to match the animation
    });

    document.addEventListener('click', () => {
        confetti();
    });

    function confetti() {
        const myCanvas = document.getElementById('my-canvas');
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        // Stop the confetti after 3 seconds
        setTimeout(() => {
            confetti.clear();
        }, 3000);
    }
});

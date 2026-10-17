function createHeart() {
    const heart = document.createElement('span');
    heart.className = 'heart';

    const symbols = ['♡', '♥', '✧', '·'];
    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (12 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (8 + Math.random() * 9) + 's';

    document.getElementById('hearts').appendChild(heart);

    setTimeout(() => heart.remove(), 18000);
}

setInterval(createHeart, 500);

const secret = document.getElementById('secret');
const revealButton = document.getElementById('revealButton');

revealButton.addEventListener('click', () => {
    const isVisible = secret.classList.toggle('show');

    revealButton.textContent = isVisible
        ? 'Cerrar mensajito'
        : 'Abrir mi último mensajito';

    if (isVisible) {
        secret.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });

        for (let i = 0; i < 28; i++) {
            setTimeout(createHeart, i * 90);
        }
    }

});
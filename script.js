const heartsContainer = document.getElementById('hearts');

function createHeart() {
    if (!heartsContainer) {
        console.error('Elemento #hearts não encontrado!');
        return;
    }

    const heart = document.createElement('span');

    heart.className = 'heart';
    heart.textContent = ['♡', '♥', 'ღ', '💕'][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (16 + Math.random() * 22) + 'px';

    const duration = 6 + Math.random() * 6;
    heart.style.animationDuration = duration + 's';

    const colors = ['#d87991', '#e8a0b2', '#c44569', '#f0b6c5'];
    heart.style.color = colors[
        Math.floor(Math.random() * colors.length)
    ];

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000 + 100);
}

for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 150);
}

setInterval(createHeart, 350);

const secret = document.getElementById('secret');
const revealButton = document.getElementById('revealButton');

if (secret && revealButton) {
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
}

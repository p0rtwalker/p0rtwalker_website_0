function moveStars(event) {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const speed = parseFloat(star.getAttribute('data-speed'));
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const starX = parseFloat(star.getAttribute('data-x'));
        const starY = parseFloat(star.getAttribute('data-y'));
        const deltaX = (mouseX - starX) * speed;
        const deltaY = (mouseY - starY) * speed;
        star.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
}

function createStars() {
    const numStars = 100;
    const container = document.querySelector('.stars');
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 2 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const speed = Math.random() * 0.1 + 0.05;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.setAttribute('data-x', x);
        star.setAttribute('data-y', y);
        star.setAttribute('data-speed', speed);
        container.appendChild(star);
    }
}

window.addEventListener('load', createStars);

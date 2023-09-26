const cube = document.querySelector('.cube');
let isDragging = false;
let startX, startY;

cube.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const endX = e.clientX;
    const endY = e.clientY;
    const deltaX = (endX - startX) / 2;
    const deltaY = (endY - startY) / 2;

    cube.style.transform = `rotateX(${deltaY}deg) rotateY(${deltaX}deg)`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});
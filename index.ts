document.addEventListener("mousemove", (event) => {
    const eye = document.querySelector(".eye") as HTMLElement;
    const eyePosition = eye.getBoundingClientRect();
    const eyeCenterX = eyePosition.left + eyePosition.width / 2;
    const eyeCenterY = eyePosition.top + eyePosition.height / 2;
    const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
    const eyeRadius = eyePosition.width / 2;
    const eyeX = eyeCenterX + eyeRadius * Math.cos(angle);
    const eyeY = eyeCenterY + eyeRadius * Math.sin(angle);
    eye.style.left = eyeX + "px";
    eye.style.top = eyeY + "px";
});

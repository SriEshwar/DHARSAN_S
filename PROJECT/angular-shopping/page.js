let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentSlide);

    // Auto switch slides every 5 seconds
    setInterval(() => {
        moveSlide(1);
    }, 5000);

    document.querySelector('.prev').addEventListener('click', () => {
        moveSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        moveSlide(1);
    });
});

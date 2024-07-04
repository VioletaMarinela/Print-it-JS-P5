const slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 2000); // Change l'image toutes les 2 secondes (2000 ms)

// Vous pouvez également ajouter des événements pour les flèches gauche et droite
const arrowLeft = document.querySelector(".slideshow img[src='./assets/images/arrow_left.png']");
const arrowRight = document.querySelector(".slideshow img[src='./assets/images/arrow_right.png']");

arrowLeft.addEventListener('click', () => {
    previousSlide();
});

arrowRight.addEventListener('click', () => {
    nextSlide();
});
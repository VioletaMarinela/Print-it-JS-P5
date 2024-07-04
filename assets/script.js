document.addEventListener("DOMContentLoaded", function () {
	const images = document.querySelectorAll('.slideshow img');
	const slides = [
		{
			"image": "slide1.jpg",
			"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image": "slide2.jpg",
			"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image": "slide3.jpg",
			"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image": "slide4.png",
			"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	];
	let currentImageIndex = 0;

	function showSlide(index) {
		images.forEach(image => {
			image.setAttribute('src', `assets/images/${slides[index].image}`);
			image.nextElementSibling.innerHTML = slides[index].tagLine;
			image.classList.remove('active');
		});
		images[0].classList.add('active');
	}

	function nextSlide() {
		currentImageIndex = (currentImageIndex + 1) % slides.length;
		showSlide(currentImageIndex);
	}

	// Initial loading of the first slide
	showSlide(currentImageIndex);

	// Automatically change the slide every 3 seconds
	setInterval(nextSlide, 3000);
);

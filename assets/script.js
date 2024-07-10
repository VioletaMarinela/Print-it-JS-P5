document.addEventListener("DOMContentLoaded", function () {

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

	let index = 0;
	const dots = document.querySelectorAll(".dot");

	function init() {
		const arrowleft = document.querySelector("#arrowleft");
		const arrowright = document.querySelector("#arrowright");


		arrowleft.addEventListener("click", () => changevalueindex(-1))
		arrowright.addEventListener("click", () => changevalueindex(1))

		dots.forEach((dot, i) => {
			dot.addEventListener("click", () => {
				index = i;
				updateslides();
				adddot(index);
			});
		});

		updateslides();
		adddot(index);
	}

	init();

	function changevalueindex(value) {
		index += value;

		if (index < 0) {
			index = slides.length - 1;
		}

		if (index > slides.length - 1) {
			index = 0;
		}

		updateslides();
		adddot(index);
	}

	function updateslides() {
		const bannerimg = document.querySelector(".banner-img");
		bannerimg.src = `./assets/images/slideshow/${slides[index].image}`

		const slidertxt = document.querySelector(".slider-text");
		slidertxt.innerHTML = slides[index].tagLine;
	}

	function adddot(selectedIndex) {
		dots.forEach((dot, i) => {
			dot.classList.toggle("dot_selected", i === selectedIndex);
		});
	}
});

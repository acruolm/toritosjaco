document.addEventListener('DOMContentLoaded', () => {
	const elementosCarousel = document.querySelectorAll('.carousel');
	M.Carousel.init(elementosCarousel, {
		duration: 50,
		dist: -80,
		shift: 3,
		padding: 5,
		numVisible: 3,
		indicators: true,
		noWrap: false
	});

});
document.addEventListener("DOMContentLoaded", () => {
	const carousel = document.querySelector(".carousel-inner");
	const speed = 1; 
	let scrollAmount = 0;
	let isHovered = false;

	
	const carouselContent = carousel.innerHTML;
	carousel.innerHTML += carouselContent;

	const startScrolling = () => {
		if (!isHovered && window.matchMedia('(min-width: 576px)').matches) {
			scrollAmount -= speed;
			if (Math.abs(scrollAmount) >= carousel.scrollWidth / 2) {
				scrollAmount = 0;
			}
			carousel.style.transform = `translateX(${scrollAmount}px)`;
		}
		requestAnimationFrame(startScrolling);
	};

	carousel.addEventListener("mouseover", () => {
		isHovered = true;
	});

	carousel.addEventListener("mouseout", () => {
		isHovered = false;
	});

	startScrolling();
});
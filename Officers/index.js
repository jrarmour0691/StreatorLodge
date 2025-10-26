//update text below image
	const carousel = document.getElementById('officersCarousel');
const officerName = document.getElementById('officerName');

carousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = carousel.querySelector('.carousel-item.active'); // Detect the active slide
    const newCaption = activeItem.getAttribute('data-caption'); // Retrieve caption from `data-caption`
    officerName.textContent = newCaption; // Update text below the carousel
});



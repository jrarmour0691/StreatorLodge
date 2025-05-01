// Select the image and its parent link
const img = document.getElementById('Facebook');
const link = img.parentElement;

// Add event listener for mouseover to change the image source
img.addEventListener('mouseover', () => {
	img.src = "../img/Facebook Black.png";
});

// Add event listener for mouseout to revert the image source
img.addEventListener('mouseout', () => {
    img.src = '../img/Facebook Blue.png'; // Revert to the original image
});




// Select logo elements text
    const homeText = document.querySelector('.home-text');
	const CARPIC = document.querySelector('.CAR.container');

    // Function to toggle writing depending on screen size
    function toggleLogo() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 990) { // Define your breakpoint (e.g., 768px for smaller screens)
            homeText.classList.remove('d-none'); // Show "Home Page"
			CARPIC.classList.remove('w-25');
			CARPIC.classList.add('w-75');
        } else {
            homeText.classList.add('d-none'); // Hide "Home Page"
			CARPIC.classList.remove('w-75');
			CARPIC.classList.add('w-25');
        }
    }

    // Add event listeners
    window.addEventListener('resize', toggleLogo); // Run on screen resize
    window.addEventListener('load', toggleLogo);   // Run when the page is loaded

   

// Add event listeners
    window.addEventListener('resize', toggleLogo); // Run on screen resize
    window.addEventListener('load', toggleLogo);   // Run when the page is loaded
	
	//update text below image
	const carousel = document.getElementById('officersCarousel');
const officerName = document.getElementById('officerName');

carousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = carousel.querySelector('.carousel-item.active'); // Detect the active slide
    const newCaption = activeItem.getAttribute('data-caption'); // Retrieve caption from `data-caption`
    officerName.textContent = newCaption; // Update text below the carousel
});



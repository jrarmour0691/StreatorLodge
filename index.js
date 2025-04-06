
// Select the image and its parent link
const img = document.getElementById('Facebook');
const link = img.parentElement;

// Add event listener for mouseover to change the image source
img.addEventListener('mouseover', () => {
	img.src = "img/Facebook Black.png";
});

// Add event listener for mouseout to revert the image source
img.addEventListener('mouseout', () => {
    img.src = 'img/Facebook Blue.png'; // Revert to the original image
});


// Select logo elements text
    const homeText = document.querySelector('.home-text');

    // Function to toggle writing depending on screen size
    function toggleLogo() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) { // Define your breakpoint (e.g., 768px for smaller screens)
            homeText.classList.remove('d-none'); // Show "Home Page"
        } else {
            homeText.classList.add('d-none'); // Hide "Home Page"
        }
    }

    // Add event listeners
    window.addEventListener('resize', toggleLogo); // Run on screen resize
    window.addEventListener('load', toggleLogo);   // Run when the page is loaded


// Select logo elements text
    const homeText = document.querySelector('.home-text');

    // Function to toggle writing depending on screen size
    function toggleLogo() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 990) { // Define your breakpoint (e.g., 768px for smaller screens)
            homeText.classList.remove('d-none'); // Show "Home Page"
        } else {
            homeText.classList.add('d-none'); // Hide "Home Page"
        }
    }

    // Add event listeners
    window.addEventListener('resize', toggleLogo); // Run on screen resize
    window.addEventListener('load', toggleLogo);   // Run when the page is loaded


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

// Function to update the iframe src based on screen size
function updateIframeSrc() {
  const iframe = document.getElementById('fb-frame');
  const screenWidth = window.innerWidth;

  // Change the src dynamically based on screen width
  if (screenWidth > 479) {
    // For desktops or larger devices
    iframe.src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstreator.lodge&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
	iframe.style.width = '500px';
    iframe.style.height = '500px';
  } 
  else {
    // For tablets or smaller devices
    iframe.src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstreator.lodge&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
	iframe.style.width = '300px';
    iframe.style.height = '500px';
  }
}

// Set the iframe src when the page loads
window.onload = updateIframeSrc();

// Update the iframe src dynamically when the window is resized
window.addEventListener('resize', updateIframeSrc());


	
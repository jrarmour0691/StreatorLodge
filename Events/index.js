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
  } else {
    // For tablets or smaller devices
    iframe.src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstreator.lodge&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
}
}

// Set the iframe src when the page loads
window.onload = updateIframeSrc();

// Update the iframe src dynamically when the window is resized
window.addEventListener('resize', updateIframeSrc());

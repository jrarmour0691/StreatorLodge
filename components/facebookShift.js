 window.addEventListener("load", function () {
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
});


 


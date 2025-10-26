  //resize logo header text and remove search bar when screen gets to small
  const search = document.querySelector('.form-control');
	const headerLogo = document.querySelector('.header-logo');

    // Function to toggle writing depending on screen size
    function toggleLogoName() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 990) { // Define your breakpoint (e.g., 768px for smaller screens)
            search.classList.add('d-none'); // Show "Home Page"
			headerLogo.classList.remove('fs-2');
			headerLogo.classList.add('fs-5');
        } else {
            search.classList.remove('d-none'); // Hide "Home Page"
			headerLogo.classList.remove('fs-5');
			headerLogo.classList.add('fs-2');
        }
    }

    // Add event listeners
    window.addEventListener('resize', toggleLogoName); // Run on screen resize
    window.addEventListener('load', toggleLogoName);   // Run when the page is loaded
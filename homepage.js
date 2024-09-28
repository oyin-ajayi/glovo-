window.addEventListener('load', function() {
    const headerExtension = document.querySelector('.header-extension');
    
    // Ensure the element starts hidden on load
    headerExtension.classList.remove('visible');
    
    // Function to show the header-extension when scrolled beyond 700px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 700) {
            headerExtension.classList.add('visible');  // Show it with animation
        } else {
            headerExtension.classList.remove('visible');  // Hide it with animation
        }
    });
});

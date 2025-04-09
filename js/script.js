document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    let overlay;
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Create or remove overlay dynamically
        if (hamburger.classList.contains('active')) {
            // Create overlay
            overlay = document.createElement('div');
            overlay.className = 'menu-overlay';
            document.body.appendChild(overlay);
            
            // Add event listener to overlay
            overlay.addEventListener('click', closeMenu);
        } else {
            // Remove overlay
            removeOverlay();
        }
    });
    
    // Function to close menu
    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        removeOverlay();
    }
    
    // Function to remove overlay
    function removeOverlay() {
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    }
    
    // Close menu when a nav link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
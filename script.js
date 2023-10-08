document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.clickable-header');
    const container = document.getElementById('content-container');
    const landing = document.getElementById('landing');
    const navLinks = document.querySelectorAll('nav a');
    const hoverElement = document.querySelector('.hover-image');
    const popupImage = document.querySelector('.image-popup');


    /* Is meant to make my pictures appear randomly around the screen but not working

    document.addEventListener('DOMContentLoaded', function() {
        hoverElement.addEventListener('mouseenter', function() {
            const randomX = Math.floor(Math.random() * (window.innerWidth - popupImage.offsetWidth));
            const randomY = Math.floor(Math.random() * (window.innerHeight - popupImage.offsetHeight));
    
            popupImage.style.left = `${randomX}px`;
            popupImage.style.top = `${randomY}px`;
    
            // Show the image
            popupImage.style.display = 'block';
        });
    
        hoverElement.addEventListener('mouseleave', function() {
            // Hide the image after moving the mouse away from the hoverElement
            popupImage.style.display = 'none';
        });
    });
*/ 
    headers.forEach(header => {
        header.addEventListener('click', function(event) {
            event.preventDefault();  

            const contentID = header.getAttribute('data-content');
            const contentElement = document.querySelector(contentID);

            // Hide all sections and landing page
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            landing.style.display = 'none';

            container.innerHTML = contentElement.innerHTML;
            container.style.display = 'block';
            container.scrollIntoView({ behavior: 'smooth' });

            window.onbeforeunload = function() {
                window.scrollTo(0, 0);
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
    
            window.location = link.getAttribute('href');
        });
    });

    // Uncomment if you wish to activate the hamburger menu functionality
    /*
    const toggleMenu = () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

    const hamburgerIcon = document.querySelector('.hamburger-icon');
    hamburgerIcon.addEventListener('click', toggleMenu);
    */
});
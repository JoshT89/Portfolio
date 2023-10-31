document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.clickable-header');
    const container = document.getElementById('content-container');
    const landing = document.getElementById('landing');
    const navLinks = document.querySelectorAll('nav a');
    const hoverElement = document.querySelector('.hover-image');
    const popupImage = document.querySelector('.image-popup');
    const things = document.querySelectorAll('.hidden-section');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelector('.menu-items');
   

    function randomizeImagePosition() {
        const randomX = Math.floor(Math.random() * (window.innerWidth - popupImage.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - popupImage.offsetHeight));

        popupImage.style.left = `${randomX}px`;
        popupImage.style.top = `${randomY}px`;

        // Show the image
        popupImage.style.display = 'block';
    }

    function hideImage() {
        popupImage.style.display = 'none';
    }

    // Image random positioning on hover for mouse-based devices
    hoverElement.addEventListener('mouseenter', randomizeImagePosition);
    hoverElement.addEventListener('mouseleave', hideImage);

    // Image random positioning on touch for touch-based devices
    hoverElement.addEventListener('touchstart', randomizeImagePosition);
    hoverElement.addEventListener('touchend', hideImage);
    hoverElement.addEventListener('touchmove', function (e) {
        e.preventDefault();  // This prevents scrolling while dragging over the element on iOS.
        randomizeImagePosition();
    });

    headers.forEach(header => {
        header.addEventListener('click', function (event) {
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
            console.log("here")
            container.scrollIntoView({ behavior: 'smooth' });

            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            window.location = link.getAttribute('href');
        });
    });

    hamburgerMenu.addEventListener('click', () => {
        menuItems.classList.toggle('menu-open');
        things.forEach((thing) => {
            thing.classList.toggle('hidden-section');
        });
    });
    });
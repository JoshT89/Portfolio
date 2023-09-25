document.addEventListener('DOMContentLoaded', function() {
    let headers = document.querySelectorAll('.clickable-header');
    let container = document.getElementById('content-container');

    headers.forEach(header => {
        header.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default anchor behavior

            let contentID = header.getAttribute('data-content');
            let contentElement = document.querySelector(contentID);

            // Hide all sections first
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Display the content of the clicked section inside the container
            container.innerHTML = contentElement.innerHTML;
            container.style.display = 'block';

            // Optional: Scroll the content into view
            // container.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
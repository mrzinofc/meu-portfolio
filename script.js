document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const menuItems = navbar.querySelectorAll('a');

    // Toggle menu for mobile view
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Smooth scroll and active class toggle
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Smooth scroll
            const targetId = item.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });

            // Remove active class from all menu items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to the clicked menu item
            item.classList.add('active');
            
            // Close the menu in mobile view after clicking a link
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });
});

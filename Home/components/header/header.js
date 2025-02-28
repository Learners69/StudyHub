document.addEventListener('DOMContentLoaded', () => {
    // Load header content
    const headerSection = document.getElementById('header-section');
    fetch('Home/components/header/header.html')
        .then(response => response.text())
        .then(html => {
            headerSection.innerHTML = html;
            // After header is loaded, initialize nav
            initializeNav();
        });
});

function initializeNav() {
    // Load nav content into main-nav
    const mainNav = document.getElementById('main-nav');
    fetch('Home/components/header/nav/nav.html')
        .then(response => response.text())
        .then(html => {
            mainNav.innerHTML = html;
            initializeNavigation(); // This function is defined in nav.js
        });
}

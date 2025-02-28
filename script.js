// Global error handling for component loading
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'SCRIPT' || e.target.tagName === 'LINK') {
        console.error('Failed to load resource:', e.target.src || e.target.href);
    }
}, true);

// Helper function for loading components
function loadComponent(elementId, htmlPath) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id '${elementId}' not found`);
        return;
    }

    fetch(htmlPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            element.innerHTML = html;
        })
        .catch(error => {
            console.error(`Error loading component from ${htmlPath}:`, error);
            element.innerHTML = '<p>Error loading component</p>';
        });
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Load header
    loadComponent('header-section', 'Home/components/header/header.html');
    
    // Load hero
    loadComponent('hero-section', 'Home/components/hero/hero.html');
    
    // Load features section
    loadComponent('features-section', 'Home/components/features/features.html');
    
    // Load download section
    loadComponent('download-section', 'Home/components/download-section/download-section.html');
    
    // Load about section
    loadComponent('about-section', 'Home/components/About/about.html');
    
    // Load footer section
    loadComponent('footer-section', 'Home/components/Footer/footer.html');
    
    // Load other sections (commented out until they're ready)
    // loadComponent('contact-section', 'Home/components/Contact/contact.html');
});

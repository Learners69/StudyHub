// Navigation functionality
function initializeNavigation() {
    const searchBtn = document.querySelector('.search-btn');
    const searchBox = document.querySelector('.search-box');
    const searchInput = searchBox.querySelector('input');
    const searchIcon = document.querySelector('.search-icon');
    let searchVisible = false;

    // Function to perform search
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            // Implement search functionality here
        }
    };

    // Toggle search box only on desktop
    if (window.innerWidth > 768) {
        searchBtn.addEventListener('click', () => {
            searchVisible = !searchVisible;
            searchBox.style.display = searchVisible ? 'block' : 'none';
            searchBtn.classList.toggle('hidden', searchVisible);
            if (searchVisible) {
                searchInput.focus();
            }
        });

        // Close search box when clicking outside (desktop only)
        document.addEventListener('click', (e) => {
            if (!searchBtn.contains(e.target) && !searchBox.contains(e.target)) {
                searchVisible = false;
                searchBox.style.display = 'none';
                searchBtn.classList.remove('hidden');
            }
        });
    }

    // Handle search icon click
    searchIcon.addEventListener('click', performSearch);

    // Handle search input enter key
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Active link handling
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!link.classList.contains('dropdown-toggle')) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && 
            !navLinksContainer.contains(e.target) && 
            navLinksContainer.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
        }
    });

    // Mobile dropdown handling
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    });
}

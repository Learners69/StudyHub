// Navigation functionality
function initializeNavigation() {
    const searchBtn = document.querySelector('.search-btn');
    const searchBox = document.querySelector('.search-box');
    const searchInput = searchBox.querySelector('input');
    const searchIcon = document.querySelector('.search-icon');
    const searchClear = document.querySelector('.search-clear');
    let searchVisible = false;

    // Function to perform search
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            // Implement search functionality here
        }
    };

    // Function to clear search
    const clearSearch = () => {
        searchInput.value = '';
        searchInput.focus();
    };

    // Handle clear button click
    searchClear.addEventListener('click', clearSearch);

    // Desktop-only search box toggle
    if (window.innerWidth > 768) {
        searchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            searchVisible = !searchVisible;
            searchBox.classList.toggle('active', searchVisible);
            searchBtn.classList.toggle('hidden', searchVisible);
            if (searchVisible) {
                searchInput.focus();
            }
        });

        // Close search box when clicking outside (desktop only)
        document.addEventListener('click', (e) => {
            if (!searchBtn.contains(e.target) && !searchBox.contains(e.target)) {
                searchVisible = false;
                searchBox.classList.remove('active');
                searchBtn.classList.remove('hidden');
            }
        });

        // Prevent search box from closing when clicking inside it
        searchBox.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Handle search icon click for both mobile and desktop
    searchIcon.addEventListener('click', performSearch);

    // Handle search input enter key and escape key
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
        // Handle Escape key
        if (e.key === 'Escape') {
            if (searchInput.value) {
                clearSearch();
            } else if (window.innerWidth > 768) {
                // Only close the search box on desktop
                searchVisible = false;
                searchBox.classList.remove('active');
                searchBtn.classList.remove('hidden');
            }
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

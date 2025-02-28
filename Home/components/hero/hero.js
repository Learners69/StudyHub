document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    const searchInput = document.getElementById('hero-search-input');
    const searchBtn = document.getElementById('hero-search-btn');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            // You can implement the actual search functionality here
            window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    });

    // Enable search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    // Typing animation
    const typingTexts = document.querySelectorAll('.typing-text span');
    let currentText = 0;

    function showNextText() {
        // Remove active class from current text
        typingTexts[currentText].classList.remove('active');
        
        // Move to next text or back to start
        currentText = (currentText + 1) % typingTexts.length;
        
        // Add active class to new text
        typingTexts[currentText].classList.add('active');
    }

    // Show first text immediately
    typingTexts[0].classList.add('active');
    
    // Change text every 3 seconds
    setInterval(showNextText, 3000);

    // Animate numbers when they come into view
    const stats = document.querySelectorAll('.stat-number');
    
    const animateNumber = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // Update every 16ms (60fps)
        let current = 0;
        
        const updateNumber = () => {
            if (current < target) {
                current = Math.min(current + step, target);
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = target.toLocaleString() + '+';
            }
        };
        
        updateNumber();
    };

    // Create intersection observer for stats
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe each stat number
    stats.forEach(stat => observer.observe(stat));
});

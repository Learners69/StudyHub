// Add intersection observer for smooth reveal animations
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    const notifyBtn = document.querySelector('.notify-btn');
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '50px'
    });

    // Initialize cards with starting styles
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);

        // Add hover sound effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });

        // Add click effects for buttons
        const button = card.querySelector('.feature-btn');
        if (button) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Add ripple effect
                const ripple = document.createElement('div');
                ripple.classList.add('ripple');
                button.appendChild(ripple);

                // Position the ripple
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';

                // Remove ripple after animation
                setTimeout(() => ripple.remove(), 1000);

                // Handle button actions
                if (button.classList.contains('notify-btn')) {
                    button.textContent = "You'll be notified!";
                    button.disabled = true;
                    button.style.background = 'linear-gradient(45deg, #4caf50, #45a049)';
                }
            });
        }
    });

    // Add floating animation to coming soon card
    const comingSoonCard = document.querySelector('.coming-soon');
    if (comingSoonCard) {
        setInterval(() => {
            comingSoonCard.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                comingSoonCard.style.transform = 'translateY(0)';
            }, 1000);
        }, 2000);
    }

    // Add styles for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

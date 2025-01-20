document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Animate cards
            cards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    // Use requestAnimationFrame for smoother updates
                    requestAnimationFrame(() => {
                        card.style.display = 'flex'; // Ensure it's visible
                        card.classList.remove('hidden'); // Remove hidden state
                        card.classList.add('animate-in'); // Trigger appear animation
                    });

                    // Clean up animation class
                    setTimeout(() => card.classList.remove('animate-in'), 600);
                } else {
                    // Add hidden state
                    card.classList.add('hidden');
                    setTimeout(() => {
                        card.style.display = 'none'; // Fully hide after animation
                    }, 400); // Match the CSS transition duration
                }
            });
        });
    });

    // Initially show all cards
    cards.forEach(card => {
        card.style.display = 'flex';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('[data-scroll]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            // Get the target section from the data-scroll attribute
            const targetId = link.getAttribute('data-scroll');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Perform custom smooth scrolling
                smoothScrollTo(targetElement.offsetTop, 1000); // 1000ms duration
            }
        });
    });

    /**
     * Smooth scrolls to a specific position in the document.
     * @param {number} targetPosition - The position to scroll to.
     * @param {number} duration - The duration of the scroll animation in ms.
     */
    function smoothScrollTo(targetPosition, duration) {
        const start = window.pageYOffset; // Starting scroll position
        const distance = targetPosition - start; // Distance to scroll
        let startTime = null;

        function animationStep(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1
            const easing = easeInOutCubic(progress); // Easing function
            window.scrollTo(0, start + distance * easing);

            if (timeElapsed < duration) {
                requestAnimationFrame(animationStep);
            }
        }

        requestAnimationFrame(animationStep);
    }

    /**
     * Easing function for smooth scrolling.
     * @param {number} t - Progress (0 to 1).
     * @returns {number} - Adjusted easing value.
     */
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
});

let currentIndex = 0;

// Function to handle carousel transitions
function setCarousel(index) {
    const items = document.querySelectorAll('.carousel-item');
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    if (index === currentIndex) return; // Prevent re-triggering the same slide

    // Remove active class and add slide-out animation to the current item
    const currentItem = items[currentIndex];
    currentItem.classList.remove('active');
    currentItem.classList.add('slide-out');

    // Remove slide-out class after transition ends
    currentItem.addEventListener('transitionend', () => {
        currentItem.classList.remove('slide-out');
    }, { once: true });

    // Add active class to the new item
    const nextItem = items[index];
    nextItem.classList.add('active');

    // Update sidebar active state
    sidebarItems.forEach((item) => item.classList.remove('active'));
    sidebarItems[index]?.classList.add('active');

    // Update the current index
    currentIndex = index;
}

// Auto-rotate carousel every 8 seconds
setInterval(() => {
    const items = document.querySelectorAll('.carousel-item:not(.hidden)');
    if (items.length > 0) {
        const nextIndex = (currentIndex + 1) % items.length;
        setCarousel(nextIndex);
    }
}, 8000);

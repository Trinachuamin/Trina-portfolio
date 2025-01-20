// Get DOM elements
const viewStickers = document.getElementById('viewStickers'); // Button to open the modal
const closeStickerModal = document.getElementById('closeStickerModal'); // Close button
const stickerModal = document.getElementById('stickerModal'); // Modal element

// Open modal when the button is clicked
viewStickers.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    stickerModal.classList.add('active'); // Show modal
    stickerModal.setAttribute('aria-hidden', 'false'); // Accessibility
});

// Close modal when the close button is clicked
closeStickerModal.addEventListener('click', (e) => {
    e.preventDefault();
    stickerModal.classList.remove('active'); // Hide modal
    stickerModal.setAttribute('aria-hidden', 'true'); // Accessibility
});

// Close modal when clicking outside the modal content
stickerModal.addEventListener('click', (e) => {
    if (e.target === stickerModal) { // Ensure click is outside modal content
        stickerModal.classList.remove('active');
        stickerModal.setAttribute('aria-hidden', 'true');
    }
});

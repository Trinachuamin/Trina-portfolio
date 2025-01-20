// Get DOM elements
const viewNameCard = document.getElementById('viewNameCard');
const closeModal = document.getElementById('closeModal');
const nameCardModal = document.getElementById('nameCardModal');

// Open modal when button is clicked
viewNameCard.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    nameCardModal.classList.add('active'); // Show modal
    nameCardModal.setAttribute('aria-hidden', 'false'); // Accessibility
});

// Close modal when close button is clicked
closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    nameCardModal.classList.remove('active'); // Hide modal
    nameCardModal.setAttribute('aria-hidden', 'true'); // Accessibility
});

// Close modal when clicking outside the modal content
nameCardModal.addEventListener('click', (e) => {
    if (e.target === nameCardModal) {
        nameCardModal.classList.remove('active');
        nameCardModal.setAttribute('aria-hidden', 'true');
    }
});

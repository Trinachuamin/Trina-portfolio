// Object to manage carousel states
const carousels = {
    immersive: { currentIndex: 0, timer: null },
    vrEscape: { currentIndex: 0, timer: null },
    unique: { currentIndex: 0, timer: null } // Added unique carousel
};

// Function to set the active carousel item
function setCarousel(carouselId, index) {
    const carouselItems = document.querySelectorAll(`#${carouselId} .carousel-item`);
    const previewImages = document.querySelectorAll(`#${carouselId} .preview-image`);

    // Update carousel active class with smooth transition
    carouselItems.forEach((item, i) => {
        item.classList.remove("active", "slide-in", "slide-out");
        if (i === index) {
            item.classList.add("active", "slide-in");
        } else if (i === carousels[carouselId].currentIndex) {
            item.classList.add("slide-out");
        }
    });

    // Update preview active class
    previewImages.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) img.classList.add("active");
    });

    carousels[carouselId].currentIndex = index;

    // Reset the timer
    resetCarouselTimer(carouselId);
}

// Function to start the carousel auto-rotation
function startCarouselTimer(carouselId) {
    carousels[carouselId].timer = setInterval(() => {
        const carouselItems = document.querySelectorAll(`#${carouselId} .carousel-item`);
        const nextIndex = (carousels[carouselId].currentIndex + 1) % carouselItems.length;
        setCarousel(carouselId, nextIndex);
    }, 5000);
}

// Function to reset the timer
function resetCarouselTimer(carouselId) {
    clearInterval(carousels[carouselId].timer); // Clear the current timer
    startCarouselTimer(carouselId); // Restart the timer
}

// Add hover effects for unique carousel
function addHoverEffects() {
    const uniqueImages = document.querySelectorAll("#unique .carousel-item img");

    uniqueImages.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.05)"; // Enlarge the image slightly
            img.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Add a shadow
            img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth transition
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)"; // Reset scale
            img.style.boxShadow = "none"; // Remove shadow
        });
    });
}

// Initialize all carousels
function initializeCarousels() {
    Object.keys(carousels).forEach(carouselId => {
        const previewImages = document.querySelectorAll(`#${carouselId} .preview-image`);

        // Add click event listeners to preview images
        previewImages.forEach((img, index) => {
            img.addEventListener("click", () => {
                setCarousel(carouselId, index);
            });
        });

        // Start the timer for each carousel
        startCarouselTimer(carouselId);
    });

    // Add hover effects for the unique carousel
    addHoverEffects();
}

// Function to open the modal and display the selected image
function openModal(imageSrc) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const caption = document.getElementById('caption');

    modal.style.display = 'flex'; // Show modal
    modalImage.src = imageSrc; // Set image source
    caption.textContent = imageSrc.split('/').pop().split('.')[0]; // Set caption based on filename
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none'; // Hide modal
}

// Initialize carousels on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initializeCarousels);

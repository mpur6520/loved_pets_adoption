const carousel = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0; // Keeps track of the first visible item
const itemsToShow = 4; // Number of staff displayed at once
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

// Ensure the carousel works without blank spaces
const updateCarouselPosition = () => {
  const itemWidth = carouselItems[0].offsetWidth; // Get the width of one item
  const offset = currentIndex * itemWidth;

  carousel.style.transform = `translateX(-${offset}px)`;
};

// Handle left arrow click
leftArrow.addEventListener('click', () => {
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = totalItems - itemsToShow; // Loop back to the end
  }
  updateCarouselPosition();
});

// Handle right arrow click
rightArrow.addEventListener('click', () => {
  currentIndex += 1;
  if (currentIndex > totalItems - itemsToShow) {
    currentIndex = 0; // Loop back to the beginning
  }
  updateCarouselPosition();
});

// Initialize position
updateCarouselPosition();

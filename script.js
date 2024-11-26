const carousel = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const itemsToShow = 4;
const totalItems = document.querySelectorAll('.carousel-item').length;

const updateCarouselPosition = () => {
  const itemWidth = carousel.children[0].offsetWidth;
  const trackWidth = itemWidth * totalItems;
  const offset = currentIndex * itemWidth;
  
  // Ensure the carousel loops around
  if (currentIndex < 0) {
    currentIndex = totalItems - itemsToShow;
  } else if (currentIndex > totalItems - itemsToShow) {
    currentIndex = 0;
  }

  carousel.style.transform = `translateX(-${offset}px)`;
};

leftArrow.addEventListener('click', () => {
  currentIndex -= 1;
  updateCarouselPosition();
});

rightArrow.addEventListener('click', () => {
  currentIndex += 1;
  updateCarouselPosition();
});

// Initialize position
updateCarouselPosition();

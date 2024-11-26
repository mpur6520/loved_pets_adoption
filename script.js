const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let scrollAmount = 0;

leftArrow.addEventListener('click', () => {
  scrollAmount -= carousel.offsetWidth / 4; // Move by one item
  if (scrollAmount < 0) scrollAmount = 0;
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  scrollAmount += carousel.offsetWidth / 4; // Move by one item
  if (scrollAmount > carousel.scrollWidth - carousel.offsetWidth) {
    scrollAmount = carousel.scrollWidth - carousel.offsetWidth;
  }
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});

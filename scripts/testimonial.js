// Second slideshow (for testimonials or cards)
let currentSlide2 = 0; // Start from the first card
const slides2 = document.querySelectorAll('.testimonial-card'); // Select all testimonial cards
const dots = document.querySelectorAll('.dot'); // Select all dots for navigation
const container = document.querySelector('.testimonial-container'); // Select the container of testimonial cards
const cardsPerSlide = 3; // Number of cards to show at a time

// Function to show a particular set of cards (slide) by index
function showSlide2(index) {
  // Calculate the scroll position for the current set of cards
  const scrollPosition = slides2[index].offsetLeft - container.offsetLeft;
  container.scrollTo({
    left: scrollPosition,
    behavior: 'smooth',
  });

  // Update active dot
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[Math.floor(index / cardsPerSlide)].classList.add('active');
}

// Function to go to the next slide
function nextSlide2() {
  currentSlide2 = (currentSlide2 + cardsPerSlide) % slides2.length;
  showSlide2(currentSlide2);
}

// Automatically change slides every 3 seconds
setInterval(nextSlide2, 3000);

// Add click event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide2 = index * cardsPerSlide;
    showSlide2(currentSlide2);
  });
});

// Show the first slide initially
showSlide2(currentSlide2);

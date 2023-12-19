const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, idx) => {
    slide.style.transition = 'transform 0.5s ease'; // Added transition in JavaScript
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

document.querySelector('.next-btn').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.overlay').style.display = 'none';
});

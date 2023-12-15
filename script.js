const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideWidth = document.querySelector('.carousel').offsetWidth;
let counter = 0;

nextBtn.addEventListener('click', () => {
  if (counter < slides.children.length - 1) {
    counter++;
    slides.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    slides.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});

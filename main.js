const box = document.querySelector('.carousel_box');
const slides = Array.from(box.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another
// slides[0].style.left = slidewidth = 0 + 'px';
// slides[1].style.left = slidewidth = 1 + 'px';
// slides[2].style.left = slidewidth = 2 + 'px';
// slides[3].style.left = slidewidth = 3 + 'px';
// slides[4].style.left = slidewidth = 4 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth = index + 'px';
}
slides.forEach(setSlidePosition);

// when i click left, move slides to the left


// when i click right, move slides to the right 
nextButton.addEventListener('click',e => {
   const currentslide = box.querySelector('.current-slide');
   const nextSlide = currentSlide.nextElementSibling;
   const amountToMove = nextSlide.style.left;
   //move the next slide
   box.style.transform = 'translateX(-' + amountToMove + ')';
   currentslide.classList.remove('current-slide');
   nextSlide.classList.add('current-slide');
}

)
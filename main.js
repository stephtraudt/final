const box = document.querySelector('.carousel_box');
const slides = Array.from(box.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another
// slides[0].style.left = slidewidth = 0 + 'px';
// slides[1].style.left = slidewidth = 1 + 'px';
// slides[2].style.left = slidewidth = 2 + 'px';
// slides[3].style.left = slidewidth = 3 + 'px';
// slides[4].style.left = slidewidth = 4 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth = index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    trackEvent.style.transform = translatex(-' + targetSlide.style.1');
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

};

// when i click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevslide);
});

// when i click right, move slides to the right 
nextButton.addEventListener('click',e => {
   const currentslide = box.querySelector('.current-slide');
   const nextSlide = currentslide.nextElementSibling;
  
   moveToSlide(track, currentslide, nextSlide);

});

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closet('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    console.log(targetIndex);
    
});
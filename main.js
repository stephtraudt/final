fetch
var slideposition = 1;
slideshow-container(slideposition);

function plusslides(n){
    slideshow(slideposition += n);
}
function currentslide(n) {
    slideshow(slideposition =n);
}
function slideshow(n) {
    var i;
    var slides =img ("containers");
    var circles = document.getElementsByClassName("dots");}
    if (n> slideposition.length) {slideposition = 1}
    if (n< 1) {slideposition = slides.length;}
    for (i = 0; i <slides.length; i++) {
        slides[i] .style.display = "flex";
    }
     for (i = 0; i <circles.length; i++) {
    circles [i].classname = circles[i].classname.replace("enable") 
    .slides[slideposition-1].style.display = "block"
    .circles[slideposition-1].classname += " enable";}
// Populates slideshow
const imageTarget = document.querySelector('#slideshow')
fetch('./content/home/home_images.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            imageTarget.insertAdjacentHTML('beforeend', `<div class="slide" style="background-image:url(content/home/images/${element.image});"><div class="slide-caption">${element.caption}</div></div>`);
        });
    });

// Populates text
const textTarget = document.querySelector('.textarea')
fetch('./content/home/home_copy.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            textTarget.insertAdjacentHTML('beforeend', `<div class="textblock"><h2 class="homeheading">${element.heading}</h2><br><p class="homebody">${element.body}</p><br></div>`);
        });
    });

setTimeout(initializeSlider, 500);
let slideIndex = 0;
let intervalId = null;
var slides = null;

// Shows first slide and starts slideshow timer
function initializeSlider(){
    slides = document.querySelectorAll(".slide");
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

// Shows the currently indexed slide and hides all others
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

// Resets slideshow timer, updates slide index, and calls show slide
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000);
}
function nextSlide(){
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000);
}
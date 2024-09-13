const imageTarget = document.querySelector('#slideshow')
fetch('./content/home/home_images.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            imageTarget.insertAdjacentHTML('beforeend', `<div class="slide" style="background-image:url(content/home/images/${element.image});">${element.caption}</div>`);
        });
    });

const textTarget = document.querySelector('.textarea')
fetch('./content/home/home_copy.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            textTarget.insertAdjacentHTML('beforeend', `<h2 class="homeheading">${element.heading}</h2><br><p class="homebody">${element.body}</p><br>`);
        });
    });

setTimeout(initializeSlider, 100); //improve

let slideIndex = 0;

let intervalId = null;

var slides = null;

// document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    slides = document.querySelectorAll(".slide");
    // console.log(slides.length);
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

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
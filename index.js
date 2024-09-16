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
            textTarget.insertAdjacentHTML('beforeend', `<div class="textblock"><h2 class="homeheading">${element.heading}</h2><br><p class="homebody">${element.body}</p><br></div>`);
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


const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})


const resources = document.querySelector('.resources');
const resourcesMenu = document.querySelector('.resources-menu')
resources.addEventListener('click', () => {
    resourcesMenu.classList.toggle('active');
})

const people = document.querySelector('.people');
const peopleMenu = document.querySelector('.people-menu')
people.addEventListener('click', () => {
    peopleMenu.classList.toggle('active');
})

const curriculum = document.querySelector('.curriculum');
const cirriculumMenu = document.querySelector('.curriculum-menu')
curriculum.addEventListener('click', () => {
    cirriculumMenu.classList.toggle('active');
})

const is = document.querySelector('.is');
const isMenu = document.querySelector('.is-menu')
is.addEventListener('click', () => {
    isMenu.classList.toggle('active');
})
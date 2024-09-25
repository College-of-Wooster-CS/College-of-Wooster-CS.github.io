//Populates the navigation
const nav = document.querySelector('nav');
fetch('/nav.html')
    .then(res=>res.text())
    .then(data=>{
        nav.innerHTML=data;
    });

//Scripts that should not run before the dynamic content in filled in
setTimeout(delayedSetup, 500);
// document.addEventListener("DOMContentLoaded", delayedSetup);
function delayedSetup(){
    const hamMenu = document.querySelector('.ham-menu');
    const navigation = document.querySelector('.navigation');
    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        navigation.classList.toggle('active');
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
}
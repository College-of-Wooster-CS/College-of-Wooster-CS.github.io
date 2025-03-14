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
    // Causes hamburger menu icon to toggle mobile navigation menu
    const hamMenu = document.querySelector('.ham-menu');
    const navigation = document.querySelector('.nav-categories');
    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        navigation.classList.toggle('active');
    })

    // Adds tap functionality to each category-menu pair
    const categoryNames = document.querySelectorAll(".nav-category-name");
    const categoryLinks = document.querySelectorAll(".nav-categories ul");
    for(let categoryIndex = 0; categoryIndex < categoryNames.length; categoryIndex++) {
        categoryNames[categoryIndex].addEventListener('click', () => {
            categoryLinks[categoryIndex].classList.toggle('active');
            categoryNames[categoryIndex].classList.toggle('flipped');
        })
    }
}
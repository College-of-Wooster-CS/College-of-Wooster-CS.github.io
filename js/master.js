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
    const navigation = document.querySelector('.navigation');
    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        navigation.classList.toggle('active');
    })

    // Adds tap functionality to each category-menu pair
    const categoryNames = document.querySelectorAll(".category-name");
    const categoryLists = document.querySelectorAll(".navigation ul");
    for(let categoryIndex = 0; categoryIndex < categoryNames.length; categoryIndex++) {
        categoryNames[categoryIndex].addEventListener('click', () => {
            categoryLists[categoryIndex].classList.toggle('active');
            categoryNames[categoryIndex].classList.toggle('flipped');
        })
    }
}
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
        // nav.classList.toggle('active');
    })

    // Adds tap functionality to each category-menu pair
    const categoryNames = document.querySelectorAll(".navigation span");
    console.log(categoryNames);
    const categoryMenus = document.querySelectorAll(".navigation ul");
    console.log(categoryMenus);
    for(let categoryIndex = 0; categoryIndex < categoryNames.length; categoryIndex++) {
        categoryNames[categoryIndex].addEventListener('click', () => {
            categoryMenus[categoryIndex].classList.toggle('active');
            console.log(4);
        })
    }
}
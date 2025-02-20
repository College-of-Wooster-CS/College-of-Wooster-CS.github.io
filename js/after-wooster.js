// Adds click functionality to each Show More button
const textButtons = document.querySelectorAll(".after-wooster-button");
const listOverflow = document.querySelectorAll(".hidden");
for(let index = 0; index < textButtons.length; index++) {
    textButtons[index].addEventListener('click', () => {
        listOverflow[index].classList.toggle('hidden');
        if (listOverflow[index].classList.contains('hidden')) {
            textButtons[index].innerHTML = "Show More";
        }
        else {
            textButtons[index].innerHTML = "Show Less";
        }
    })
}
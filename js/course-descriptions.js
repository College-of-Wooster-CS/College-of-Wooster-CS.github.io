// Adds click functionality to each name-description pair
const courseNames = document.querySelectorAll(".course-name");
const courseInfo = document.querySelectorAll(".course-info");
for(let courseIndex = 0; courseIndex < courseNames.length; courseIndex++) {
    courseNames[courseIndex].addEventListener('click', () => {
        courseNames[courseIndex].classList.toggle('flipped');
        courseInfo[courseIndex].classList.toggle('hidden');
    })
}
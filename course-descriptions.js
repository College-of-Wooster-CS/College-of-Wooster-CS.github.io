// Adds click functionality to each name-description pair
courseNames = document.querySelectorAll(".course-name");
courseInfo = document.querySelectorAll(".course-info");
for(let courseIndex = 0; courseIndex < courseNames.length; courseIndex++) {
    courseNames[courseIndex].addEventListener('click', () => {
        courseNames[courseIndex].classList.toggle('flipped');
        courseInfo[courseIndex].classList.toggle('hidden');
    })
}
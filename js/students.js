// for checking if images exist
// EXPLAIN
function fileExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status !== 404;
}

// Populates students
const yearsDestination = document.querySelector('.years-wrapper');
fetch('/content/students/students.json')
    .then(res => res.json())
    .then(data => {
        data.sort((a, b) => parseFloat(a.year) - parseFloat(b.year));
        data.forEach(year => {
            yearsDestination.insertAdjacentHTML('afterbegin', `<div class="year">${year.year}<div class="students-wrapper"></div></div>`);
            const studentsDestination = document.querySelector('.students-wrapper');
            // ALPHABETIZE
            year.students.forEach(student => {
                let first = student.firstName;
                if (first != "") {
                    first = first.concat(" ");
                }
                let displayName = first.concat(student.lastName);
                let fileName = displayName.concat(student.ID, ".jpg");
                let url = '/img/students/'.concat(year.year, '/', fileName);
                // REMOVE CHARACTERS
                // console.log(myString.replace(/[^a-zA-Z0-9,;\-.!? ]/g, ''));
                if (fileExists(url)) {
                    console.log(displayName);
                    studentsDestination.insertAdjacentHTML('beforeend', `<div class="student"><div class="student-photo" style="background-image:url('${url}');"></div>${displayName}</div>`);
                }
                else {
                    studentsDestination.insertAdjacentHTML('beforeend', `<div class="student"><div class="student-photo" style="background-image:url('/img/students/placeholder.jpg');"></div>${displayName}</div>`);
                }
            })
        });
    });
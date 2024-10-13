// Populates text
const textTarget = document.querySelector('main')
fetch('/content/announcements/announcements.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            textTarget.insertAdjacentHTML('beforeend', `<div class="announcement"><h2 class="announcement-heading">${element.heading}</h2><br><p class="announcement-body">${element.body}</p><br></div>`);
        });
    });
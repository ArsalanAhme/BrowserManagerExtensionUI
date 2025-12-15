const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;


themeBtn.addEventListener('click', () => {

    body.classList.toggle('light-theme');


    if (body.classList.contains('light-theme')) {
        themeIcon.src = 'assets/images/icon-moon.svg';
    } else {
        themeIcon.src = 'assets/images/icon-sun.svg';
    }
});
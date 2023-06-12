const navIcon = document.querySelector('.nav-icon');
const delay = document.querySelector('.page-top__delay ');
const menu = document.querySelector('.page-top__wrapper');
const navLinks = document.querySelectorAll('.nav-mobile a');

// добавления события на бургер
navIcon.addEventListener('click', function(){
    this.classList.toggle('nav-icon_active');
    delay.classList.toggle('page-top__delay_active');
    menu.classList.toggle('page-top__wrapper_active');
    body.classList.toggle('lock');
})


navLinks.forEach(link =>{
    link.addEventListener('click', function(){
        navIcon.classList.remove('nav-icon_active');
        delay.classList.remove('page-top__delay_active');
        menu.classList.remove('page-top__wrapper_active');
        body.classList.remove('lock');
    })
})
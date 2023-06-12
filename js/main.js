const body = document.body;

const btnBack = document.getElementById('backtop');

btnBack.style.opacity = 0;

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 600) {
        btnBack.style.opacity = 1;
    } else {
        btnBack.style.opacity = 0;
    }
})
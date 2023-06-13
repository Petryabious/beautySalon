// slider
const sliders = document.querySelectorAll('.slider__item');
const dotsContainer = document.getElementById('dots');
const [btnRight, btnLeft] = document.querySelectorAll('.slider__btns [type="button"]');

let indexOfSlide = 0;

// pagination

function renderDot(){
    const markup = `<span class="slider-dot" ></span>`;
    dotsContainer.insertAdjacentHTML('beforeend', markup);
}

function renderDots(lengthOfSliders){
    for(let i =0; i< lengthOfSliders; i++){
        renderDot();
    }
}

renderDots(sliders.length);

const dots = document.querySelectorAll('.slider-dot');

function activeDot(index){
    // удаление у всех класса active
    dots.forEach(dot => dot.classList.remove('slider-dot_active'));
    dots[index].classList.add('slider-dot_active');
}
// добавляем событие клик
dots.forEach((dot, index) => {
    dot.addEventListener('click', function(){
        currentSlide(index);
        indexOfSlide = index;
    })
})






// запуск активного слайда
function activeSlide(index){
    // удаление у всех класса active
    sliders.forEach(slider => slider.classList.remove('slider__item_active'));
    sliders[index].classList.add('slider__item_active');
}



function currentSlide (index){
    activeSlide(index);
    activeDot(index);
}

btnRight.addEventListener('click', function(){
    if (indexOfSlide === sliders.length-1) {
        indexOfSlide=0;
        currentSlide(indexOfSlide)
    } else {
        indexOfSlide++;
        currentSlide(indexOfSlide)
    }
});
btnLeft.addEventListener('click', function(){
    if (indexOfSlide === 0) {
        indexOfSlide=sliders.length-1;
        currentSlide(indexOfSlide)
    } else {
        indexOfSlide--;
        currentSlide(indexOfSlide)
    }
});


function showSliders(){ 
    setInterval(()=>{
        if (indexOfSlide=== sliders.length-1) {
            indexOfSlide=0;
        }
        currentSlide (indexOfSlide);        
        indexOfSlide++;
    },4000)
}


showSliders();
// modals

const btnModel = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-model]');
const btnClose = document.querySelector('[data-btn-close]');

btnModel.addEventListener('click', function(){
    modal.classList.remove('modal-signup_hidden');
    body.classList.add('lock');

    modal.querySelector('.modal-signup__content').addEventListener('click', function(event){
        event.stopPropagation();
    })
})

function removeClassHidden(){
    modal.classList.add('modal-signup_hidden');
    body.classList.remove('lock');
}

btnClose.addEventListener('click', removeClassHidden);
modal.addEventListener('click', removeClassHidden);


// second modal

const modalVideoBtn = document.querySelector('[data-modal-video]');
const modalVideo = document.querySelector('[data-model-video]');

modalVideoBtn.addEventListener('click', item =>{
    modalVideo.classList.remove('modal-video_hidden');
    body.classList.add('lock');

    modalVideo.querySelector('video').play();
})

modalVideo.addEventListener('click', item =>{
    modalVideo.classList.add('modal-video_hidden');
    body.classList.remove('lock');

    modalVideo.querySelector('video').pause();
})
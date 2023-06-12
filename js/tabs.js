// tabs

const tabsNav = document.querySelectorAll('[data-nav]');
const tabsContent = document.querySelectorAll('[data-content]');


function displayTabContent(number){
    tabsContent.forEach(item =>{
        
        if (item.dataset.content === number) {
            item.classList.add('prices__tab-body_active')
        } else {
            item.classList.remove('prices__tab-body_active')
        }
    })
}


tabsNav.forEach(item => {
    item.addEventListener('click', function(event){   
        displayTabContent(event.target.dataset.nav);
        document.querySelector('.prices__tab-title_active').classList.remove('prices__tab-title_active');
        item.classList.add('prices__tab-title_active');
    })
})
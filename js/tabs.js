// tabs

const tabsNav = document.querySelectorAll('[data-nav]');
const tabsContent = document.querySelectorAll('[data-content]');
const mediaQuery = window.matchMedia('(max-width: 850px)');



function displayTabContent(number){
    tabsContent.forEach(item =>{
        
        if (item.dataset.content === number) {
            item.classList.add('prices__tab-body_active')
        } else {
            item.classList.remove('prices__tab-body_active')
        }

    })
}


// tabsNav.forEach(item => {
//     item.addEventListener('click', function(event){   
//         displayTabContent(event.target.dataset.nav);
//         document.querySelector('.prices__tab-title_active').classList.remove('prices__tab-title_active');
//         item.classList.add('prices__tab-title_active');
//     })
// })


function displayChangeTabs(e){
    if (e.matches) {
        
        tabsNav.forEach(item => {
            item.addEventListener('click', function(event){
                if (!item.classList.contains('prices__tab-title_active')) {
                    // document.querySelector('.prices__tab-title_active').classList.remove('prices__tab-title_active');
                    
                    tabsNav.forEach(item => item.classList.remove('prices__tab-title_active'));
                    item.classList.add('prices__tab-title_active');
                    displayTabContent(event.target.dataset.nav);

                } else {
                    item.classList.remove('prices__tab-title_active');
                    // document.querySelector('.prices__tab-body_active').classList.remove('prices__tab-body_active');
                    displayTabContent();
                }
            })
        })
        
    } else {
    tabsNav.forEach(item => {
        item.addEventListener('click', function(event){   
            displayTabContent(event.target.dataset.nav);
            document.querySelector('.prices__tab-title_active').classList.remove('prices__tab-title_active');
            item.classList.add('prices__tab-title_active');
        })
    })

    }
}



// displayTabContent(event.target.dataset.nav);
// document.querySelector('.prices__tab-title_active').classList.remove('prices__tab-title_active');
// item.classList.add('prices__tab-title_active');



displayChangeTabs(mediaQuery);
mediaQuery.addEventListener('change', displayChangeTabs);
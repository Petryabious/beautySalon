// accord

const rulesItems = document.querySelectorAll('.rules__item-name');

rulesItems.forEach(rulesItem => {
    rulesItem.addEventListener('click', function(){

        if (!this.classList.contains('rules__item-name_active')) {   

            rulesItems.forEach(item => {
                item.classList.remove('rules__item-name_active');
                item.nextElementSibling.classList.remove('rules__item-text_active');
            })
            
            this.classList.add('rules__item-name_active');
            this.nextElementSibling.classList.add('rules__item-text_active');
        } else {
            
            this.classList.remove('rules__item-name_active');
            this.nextElementSibling.classList.remove('rules__item-text_active');
        }
        
    })
})

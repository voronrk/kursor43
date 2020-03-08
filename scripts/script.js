document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const main=document.querySelector('.main'),
          headerTop=document.querySelector('.header-top');
   
    window.addEventListener('scroll',() => {
        if (main.getBoundingClientRect().top<=headerTop.getBoundingClientRect().bottom) {
            headerTop.style='background-color:rgba(164,139,117)';
        } else {
            headerTop.style=''
        }
    });

    main.addEventListener('click', (event)=>{
        if (event.target.className=="left-menu__item") {
        event.preventDefault();
        window.location.hash=event.target.hash;
        const currentTitle=document.getElementsByName(event.target.hash.replace('#',''))[0];
        window.scrollBy(0,-headerTop.getBoundingClientRect().bottom);
        };
    });
})
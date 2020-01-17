window.addEventListener('DOMContentLoaded', function() {
    
    'use strict';

    let tab = document.querySelector('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
           tabContent[i].classList.remove('show');            
           tabContent[i].classList.add('hide');            
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');            
            tabContent[b].classList.add('show');        
        }
    }


});
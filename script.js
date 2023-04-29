// burger

'use strict';

const burger = document.querySelector('.burger');
const adaptiveMenu = document.querySelector('.adaptive-menu');
const adaptiveMenuCover = document.querySelector('.adaptive-menu__cover');
const closeBtn = document.querySelector('.close');
const nav = adaptiveMenu.querySelector('.adaptive-menu__nav');
const navList = nav.querySelectorAll('a');

function showAdaptiveMenu() {
    adaptiveMenu.classList.remove('adaptive-menu_hidden');
    adaptiveMenuCover.classList.remove('adaptive-menu__cover_hidden');    
    adaptiveMenu.classList.add('adaptive-menu_show');
    adaptiveMenuCover.classList.add('adaptive-menu__cover_show');
    burger.classList.add('hide');
    closeBtn.classList.add('show');
    nav.classList.add('adaptive-menu__nav_active');
    document.body.style.overflow = 'hidden';
}

function hideAdaptiveMenu() {   
    adaptiveMenu.classList.remove('adaptive-menu_show');
    adaptiveMenuCover.classList.remove('adaptive-menu__cover_show');
    adaptiveMenu.classList.add('adaptive-menu_hidden');
    adaptiveMenuCover.classList.add('adaptive-menu__cover_hidden');
    closeBtn.classList.remove('show');
    burger.classList.remove('hide');   
    nav.classList.remove('adaptive-menu__nav_active');   
    document.body.style.overflow = '';
}

function hideAdaptiveMenuByClick(event) {
    const target = event.target;

    navList.forEach(item => {
        if (item == target) {
            hideAdaptiveMenu();
        }
    });    

    if (target == adaptiveMenuCover) {
        hideAdaptiveMenu();
    }
}

burger.addEventListener('click', showAdaptiveMenu);
closeBtn.addEventListener('click', hideAdaptiveMenu);
window.addEventListener('click', hideAdaptiveMenuByClick);


// navigation

const navHeader = document.querySelector('.nav');
const navHeaderLinks = document.querySelectorAll('.nav a');

function changeColor(event) {
    const target = event.target;

    navHeaderLinks.forEach(a => {
        a.style.color = '#000000';
        a.style.fontWeight = '400';

        if (a == target) {
            a.style.color = '#E06733';
            a.style.fontWeight = '700';

        }
    });   
}

navHeader.addEventListener('click', changeColor);


// service

const parentOfBtns = document.querySelector('.service-buttons');
const cards = document.querySelectorAll('.service__wrapper .card');
const btns = parentOfBtns.querySelectorAll('.buttons');
const titleOfCard = document.querySelectorAll('.card h3');

parentOfBtns.addEventListener('click', changeCards);

function changeCards(e) {
    let count = 0;

    if (e.target.classList.contains('buttons')) {   
        for (let i = 0; i < btns.length; i++) {   

            if (btns[i] == e.target) {
                e.target.classList.add('buttons_active');   
                
                for (let j = 0; j < cards.length; j++) {
                    cards[j].classList.add('card_blur');  

                    switch (e.target) {
                        case btns[0]:
                            filterCard(j, 'Garden');
                            break;
                        case btns[1]: 
                            filterCard(j, 'Lawn');
                            break;
                        case btns[2]: 
                            filterCard(j, 'Planting');
                            break;
                    }
                }                                 
            } 
            
            countBtns(i); 
        }   
    }
   

    function filterCard(index, word) {        
        const firstWord = titleOfCard[index].textContent.split(" ")[0];

        if (firstWord == word) {      
            cards[index].classList.remove('card_blur');
        }
    }

    function countBtns(index) {
        if (btns[index].classList.contains('buttons_active')) {
            count++;
        }        
    
        if (count == 1) {
            btns.forEach(item => {
                item.classList.remove('buttons_active'); 
                e.target.classList.add('buttons_active');
            });
        }
    }
}


// prices

const tariffsParent = document.querySelector('.tariffs');
const tariffs = document.querySelectorAll('.tariffs__item');
const tariffsContent = document.querySelectorAll('.tariffs__content');
const span = document.querySelectorAll('.tariffs__item > span');
const arrow = document.querySelectorAll('.tariffs__item .arrow');
// console.log(span);


tariffsParent.addEventListener('click', toggleItem);

function toggleItem(e) {     
    
    for (let i = 0; i < tariffs.length; i++) {  
        if (tariffs[i].classList.contains('tariff_active')) {
            tariffs[i].classList.remove('tariff_active');
            arrow[i].classList.remove('arrow_active');
            tariffsContent[i].classList.remove('show');
        } else {
            if (e.target == tariffs[i] || e.target == span[i] || e.target == arrow[i]) {  
                tariffs[i].classList.toggle('tariff_active');
                arrow[i].classList.toggle('arrow_active');
                tariffsContent[i].classList.toggle('show');
            } 
        }
    }    
}



// contacts

const city = document.querySelector('.contacts__city');
const arrowCity = document.querySelector('.contacts__city .arrow');
const contentCity = document.querySelector('.contacts__city-content');
const valueCity = document.querySelector('.contacts__city span');
const cityItem = document.querySelectorAll('.city-item');
const cityItemSpan = document.querySelectorAll('.city-item span');
const phonesCity = document.querySelectorAll('.contacts__phones');
const callUs = document.querySelectorAll('.contacts__phones-button');
// console.log(callUs);

city.addEventListener('click', toggleCity);

function toggleCity(e) {
    phonesCity.forEach(item => {
        item.classList.remove('show');
    });

    city.classList.toggle('contacts__city_active');
    arrowCity.classList.toggle('arrow_active');
    contentCity.classList.toggle('show');
}

contentCity.addEventListener('click', chooseCity);

function chooseCity(e) {
    for (let i = 0; i < cityItem.length; i++) {
        if (e.target == cityItem[i] || e.target == cityItemSpan[i]) {
            valueCity.textContent = cityItemSpan[i].textContent;
            contentCity.classList.remove('show');
            city.classList.add('contacts__city_active');
            arrowCity.classList.remove('arrow_active');
            phonesCity[i].classList.add('show');
        }
    }
}


callUs.forEach(item => {
    item.addEventListener('click', calling);
});

function calling() {    

    callUs.forEach(item => {
        item.innerHTML = `<span>Wait...</span>`;
        this.append();
    });
}
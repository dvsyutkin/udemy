'use strict';

let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item'),
    title = document.getElementById('title'),
    columns = document.getElementsByClassName('column'),
    adv = document.querySelector('.adv'),
    promptBox = document.querySelector('#prompt'),
    menuItemLi = document.createElement('li');

menu.insertBefore(menuItems[2], menuItems[1]);
menuItemLi.classList.add("menu-item");
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);

document.body.style.background = "url(./img/apple_true.jpg)center no-repeat";
document.body.style.backgroundSize = "cover";

title.innerHTML = 'Мы продаем только <strong>подлинную</strong> технику Apple';

adv.remove();

let q = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptBox.textContent = q;

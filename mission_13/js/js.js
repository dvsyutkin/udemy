window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
        for (let i = a; i < tab.length; i++) {
            tab[i].classList.remove('current');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
        tab[b].classList.toggle('current');
    }

    info.addEventListener('click', event => {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // кнопка на вверх
    let btnTop = document.querySelector('.btn-top');
    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop.toFixed();
        if (scrollTop >= 450) {
            btnTop.style.opacity = 1;
        } else {
            btnTop.style.opacity = 0;
        }
    });

    btnTop.addEventListener('click', () => {

        let top = setInterval(() => {
            if (document.documentElement.scrollTop >= 10) {
                document.documentElement.scrollTop -= 30;
            } else {
                clearInterval(top);
            }
        }, 1);
    });


    // таймер

    let deadLine = '2020-01-25';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        const timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerId = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }
            // for (const key in t) {
            //     if (t[key] <= 9) {
            //         t[key] = '0' + t[key];
            //     }
            // }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timerId);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadLine);

    // Модальное окно
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popupClose = document.querySelector('.popup-close');

    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    popupClose.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let descriptionBtn = document.querySelectorAll('.description-btn');

    descriptionBtn.forEach(element => {
        element.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });

    // отправка формы

    let message = {
            loading: 'Идет отправка сообщения...',
            succes: 'Спасибо за ображения, мы свяжемся с Вами',
            failure: 'Произошла какая-о ошибка'
        },
        forms = document.querySelectorAll('form'),
        mainForm = document.querySelector('.main-form'),
        sendMessage = document.createElement('div');

    sendMessage.classList.add('status');


    forms.forEach(element => {
        element.addEventListener('submit', function (event) {

            let input = element.querySelectorAll('input');
            event.preventDefault();

            element.appendChild(sendMessage);

            let request = new XMLHttpRequest();
            request.open("POST", "server.php");
            //request.setRequestHeader('Content-type', 'application/x-www-form-urlencode'); // заголовок для FormData
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // заголовок для JSON

            let formData = new FormData(element);

            let obj = {}; // временный объект для конверта из FormData в JSON формат
            formData.forEach((value, key) => {
                obj[key] = value;
            });

            let json = JSON.stringify(obj); // конвертация в JSON формат
            request.send(json);

            request.addEventListener('readystatechange', () => {
                if (request.readyState < 4) {
                    sendMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    sendMessage.innerHTML = message.succes;

                    input.forEach(elementInput => {
                        elementInput.value = '';
                    });

                } else {
                    sendMessage.innerHTML = message.failure;
                }
            });
        });
    });


    // mainForm.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     mainForm.appendChild(sendMessage);

    //     let request = new XMLHttpRequest();
    //     request.open("POST", "server.php");
    //     //request.setRequestHeader('Content-type', 'application/x-www-form-urlencode'); // заголовок для FormData
    //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // заголовок для JSON

    //     let formData = new FormData(mainForm);

    //     let obj = {}; // временный объект для конверта из FormData в JSON формат
    //     formData.forEach((value, key) => {
    //         obj[key] = value;
    //     });
    //     let json = JSON.stringify(obj); // конвертация в JSON формат
    //     request.send(json);

    //     request.addEventListener('readystatechange', () => {
    //         if (request.readyState < 4) {
    //             sendMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             sendMessage.innerHTML = message.succes;

    //             input.forEach(element => {
    //                 element.value = '';
    //             });

    //         } else {
    //             sendMessage.innerHTML = message.failure;
    //         }
    //     });

    // });

});
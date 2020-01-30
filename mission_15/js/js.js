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

    more.addEventListener('click', function() {
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
        sendMessage = document.createElement('div');

    sendMessage.classList.add('status');


    forms.forEach(element => {
        element.addEventListener('submit', function (event) {
            event.preventDefault();
            element.appendChild(sendMessage);
            let formData = new FormData(element),
                input = element.getElementsByTagName('input');
            
            let obj = {}; // временный объект для конверта из FormData в JSON формат
            formData.forEach((value, key) => {
                obj[key] = value;
            });

            postData(obj)
                        .then(() => {
                            sendMessage.innerHTML = message.succes;
                            clearInput(input);
                        })
                        .catch(() => {
                            sendMessage.innerHTML = message.failure;
                        });
        });
    });

    function postData(data) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open("POST", "server.php");
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // заголовок для JSON

            let json = JSON.stringify(data); // конвертация в JSON формат
            request.send(json);

            request.addEventListener('readystatechange', () => {
                let status = request.readyState;
                if (request.readyState < 4) {
                    resolve(status);
                } else if (request.readyState === 4 && request.status == 200) {
                    resolve();
                } else {
                    reject(status);
                }
            });
        });
    }

    function clearInput(input) {
        for(let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    }

// Slider

    const   sliderWrap = document.querySelector('.wrap'),
            slides = document.querySelectorAll('.slider-item'),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'),
            dotsWrap = document.querySelector('.slider-dots'),
            dots = document.querySelectorAll('.dot');

    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => item.style.display = 'none');
        dots.forEach(item => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }


    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', (e) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && dots[i - 1] == e.target ) {
                currentSlide(i);
        }
            
        }
    });


});
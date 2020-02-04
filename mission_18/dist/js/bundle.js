/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/btnUp.js":
/*!*******************************!*\
  !*** ./src/js/parts/btnUp.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function btnUp() {
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
}

module.exports = btnUp;

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    // Калькулятор
    let persones = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        placeCoef = 1,
        multiCoef = 1000,
        total = 0;

    totalValue.innerHTML = 0;

    persones.addEventListener('change', function () {
        if (this.value == '') {
            totalValue.innerHTML = 0;
        } else {
            personsSum = +this.value;

            total = ((daysSum + personsSum) * placeCoef) * multiCoef;

            if (restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }
    });

    restDays.addEventListener('change', function () {
        if (this.value == '') {
            totalValue.innerHTML = 0;
        } else {
            daysSum = +this.value;

            total = ((daysSum + personsSum) * placeCoef) * multiCoef;

            if (persones.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }
    });

    place.addEventListener('change', function () {
        let b = +this.options[this.selectedIndex].value;
        if (persones.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            placeCoef = b;
            total = ((daysSum + personsSum) * placeCoef) * multiCoef;
            totalValue.innerHTML = total;
        }
    });

}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
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
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    }

}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/popup.js":
/*!*******************************!*\
  !*** ./src/js/parts/popup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popup() {
    // Модальное окно
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popupClose = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
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

}

module.exports = popup;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    // Slider

    const sliderWrap = document.querySelector('.wrap'),
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
            if (e.target.classList.contains('dot') && dots[i - 1] == e.target) {
                currentSlide(i);
            }
        }
    });

}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
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

}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    // таймер


    function setTimeData(num = 1) {

        let t = Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60)),
            dateNew = t + (60000 * num);
        
        return dateNew;
    }
    

    function getTimeRemaining(endtime) {
        let t = endtime - Date.parse(new Date()),
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

    setClock('timer', setTimeData());
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {

    "use sctrict";
    let calc = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js"),
        btnUp = __webpack_require__(/*! ./parts/btnUp */ "./src/js/parts/btnUp.js"),
        popup = __webpack_require__(/*! ./parts/popup */ "./src/js/parts/popup.js");

    calc();
    form();
    slider();
    tabs();
    timer();
    btnUp();
    popup();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
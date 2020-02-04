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
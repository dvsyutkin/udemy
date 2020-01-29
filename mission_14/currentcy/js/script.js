let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function conMa() {
        let request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        return new Promise(function (resolve, reject) {
            request.onload = function() {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        resolve(request);
                    }
                    // let data = JSON.parse(request.response);    
                    // inputUsd.value = inputRub.value / data.usd;
                } else {
                    reject();
                }
            };
        });
    }

    conMa()
        .then((request) => {
            let data = JSON.parse(request.response);    
            inputUsd.value = (inputRub.value / data.usd).toFixed(2);
        })
        .then(() => console.log(5000))
        .catch(() => {
            console.log('Запрос не прошел');
        });

});
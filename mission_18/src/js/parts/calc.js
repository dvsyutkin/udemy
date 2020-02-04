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
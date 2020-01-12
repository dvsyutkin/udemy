'use strict';

const money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', ''),

    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');

//     if ( (typeof(a)) === 'string' && a != null && (typeof(b)) === 'string' 
//         && b != null && a.length < 50 && a != '' && b != '') {
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// }

// цикл do-while

/*let i = 0;
do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    if ((typeof (a)) === 'string' && a != null && (typeof (b)) === 'string' &&
        b != null && a.length < 50 && a != '' && b != '') {
        appData.expenses[a] = b;
        i++;
    }

} while (i < 2);*/



console.log(appData.expenses);


// alert('Бюджет на один день: ' + appData.budget/30 + ' руб.');
'use strict';

const money = +prompt('Ваш бюджет на месяц?', ''),
    time  = prompt('Введите дату в формате YYYY-MM-DD', ''),

    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

    // const qustions = [
    //     'Введите обязательную статью расходов в этом месяце',
    //     'Во сколько обойдется?'
    // ];

    // for (let i = 0; i < qustions.length; i++) {
        
    //     appData.expenses = qustions[i];
    // }

    let quest1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
        quest2 = prompt('Во сколько обойдется?', ''),
        quest3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
        quest4 = prompt('Во сколько обойдется?', '');


    appData.expenses[quest1] = quest2;
    appData.expenses[quest3] = quest4;

    alert('Бюджет на один день: ' + appData.budget/30 + ' руб.');


    console.log(appData);
    
    



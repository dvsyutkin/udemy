let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    // проверка на ввод бюджета
    while (isNaN(money) || money == null || money == "") {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
    
        if ( (typeof(a)) === 'string' && a != null && (typeof(b)) === 'string' 
            && b != null && a.length < 50 && a != '' && b != '') {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}
chooseExpenses();


appData.moneyPerDay = (appData.budget / 30).toFixed();

if (appData.moneyPerDay < 1000) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла какая-то ошибка");
    
}
alert('Бюджет на один день: ' + appData.moneyPerDay + ' руб.');
console.log(appData);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();
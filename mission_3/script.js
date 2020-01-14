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
        savings: false
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

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Бюджет на один день: ' + appData.moneyPerDay + ' руб.');
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 1000) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла какая-то ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

// Определение не обязательных расходов
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let q = prompt('Статья необязательных расходов?');
        if (q !='' && q != null){
            appData.optionalExpenses[i+1] = q;
        } else {
            i--;
        }
    }
}

// chooseOptExpenses();
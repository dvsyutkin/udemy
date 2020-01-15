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
        savings: false,
        chooseExpenses: function() { //определение обяхательных статей расходов
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
        },
        detectDayBudget: function() { //ежедневный бюджет
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert('Бюджет на один день: ' + appData.moneyPerDay + ' руб.');
        },
        detectLevel: function() {// определение уровня дохода
            if (appData.moneyPerDay < 1000) {
                console.log("Минимальный уровень достатка");
            } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000){
                console.log("Средний уровень достатка");
            } else if (appData.moneyPerDay > 2000){
                console.log("Высокий уровень достатка");
            } else {
                console.log("Произошла какая-то ошибка");
            }
        },
        checkSavings: function() {  //проверка доходности с накоплений
            if (appData.savings == true) {
                let save = +prompt('Какова сумма накоплений?', ''),
                    percent = +prompt('Под какой процент?', '');
        
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function() { // Определение необязательных расходов
            for (let i = 1; i < 3; i++) {
                let q = prompt('Статья необязательных расходов?', '');
                if (q !='' && q != null){
                    appData.optionalExpenses[i] = q;
                } else {
                    i--;
                }
            }
        },
        chooseIncome: function() {  //определение дополнительных доходов
            let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
            while (!isNaN(items) || items == '' || items == null) {
                items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
            }
            appData.income = items.split(', ');
            appData.income.push(prompt('Может хотите добавить что-нибудь еще?', ''));
            appData.income.sort();

            console.log('Способы доп. заработка: ');
            appData.income.forEach(function(item, i) {
                i++;
                console.log( i + ' - ' + item);
                
            });

            console.log('Наша программа включает в себя данные:');
            for (let key in appData) {
                console.log(appData[key]);
            }
        }

    };






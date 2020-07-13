'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),    // Должны быть введены цифры, если не ввести,
    // то в консоль выведется сообщение "Произошла ошибка"
    time = prompt("Введите дату в формате YYYY-VV-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = prompt("Во сколько обойдётся?", "");

    // Если в prompt нажать отмена, то мы получим "null" 
    if ((typeof (a) === 'string') &&   // Должна быть строка
        (typeof (a) != null) &&         // Нельзя нажимать отмену в первом окне
        (typeof (b) != null) &&         // Нельзя нажимать отмену во втором окне
        (b != '') &&                   // Обязательно необходимо ввести данные в первое окно
        (a != '') &&                   // Обязательно необходимо ввести данные во второе окно
        (a.length < 50)
    ) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
}


function detectDayBudget() {
    appData.moneyPerDay = appData.budget / 30;

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}


function detectLevel() {

    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

function chooseOptExpenses()
{
    for(let i = 0; i < 3; i++)
    {
        appData.optionalExpenses[i+1] = +prompt("Статья необязательных расходов?", '')
    }
}

detectDayBudget();
detectLevel();
chooseOptExpenses();
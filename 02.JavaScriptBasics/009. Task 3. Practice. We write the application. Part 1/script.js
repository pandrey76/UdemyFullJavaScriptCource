'use strict';

let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-VV-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false,
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", "");
    a2 = prompt("Во сколько обойдётся?", "");
    a3 = prompt("Введите обязательную статью расходов в этом месяце", "");
    a4 = prompt("Во сколько обойдётся?", "");
    
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget /30);


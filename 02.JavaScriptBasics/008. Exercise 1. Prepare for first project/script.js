'use strict';

var money = prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: null,
    savings: false,
};

var rashod = prompt("Введите обязательную статью расходов в этом месяце", "");
var how_match = prompt("Во сколько обойдется?", "");

var expenses = {
    rashod : how_match,
    };
console.log(expenses);
appData.expenses = expenses;
console.log(appData);

//alert("Бюджет на один день: ", (appData.budjet - how_match) / 30);
alert((appData.budjet - how_match) / 30);



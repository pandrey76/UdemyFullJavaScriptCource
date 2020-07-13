
let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", ''),    // Должны быть введены цифры, если не ввести,
      // то в консоль выведется сообщение "Произошла ошибка"
    time = prompt("Введите дату в формате YYYY-VV-DD", "");
    while(isNaN(money) ||   //  isNaN возврашает true в том случае, когда в неё попадают не цифры.
            money == "" ||  // Введена пустая строка
            money == null)  // Чтобы пользователь не мого нажать кнопку "Отмена".
    {
        money = +prompt("Ваш бюджет на месяц?", '')
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: true,   // false
};

function chooseExpenses()
{
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
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); //toFixed - откидывает дробную часть (округляем),
                                                        // но при этом возваращает строку, это надо помнить.
                                    // Параметр функции это число, знаков послк запятой, которые мы хотим вернуть,
                                                        // Например: toFixed(2) - два знака после запятой.

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

function  checkSavings() {
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозита: " +  appData.monthIncome);
    }
}

checkSavings();
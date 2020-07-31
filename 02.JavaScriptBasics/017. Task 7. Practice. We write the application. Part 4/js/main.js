
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
    chooseExpenses: function () {
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
                console.log("Всё верно");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(); //toFixed - откидывает дробную часть (округляем),
        // но при этом возваращает строку, это надо помнить.
        // Параметр функции это число, знаков послк запятой, которые мы хотим вернуть,
        // Например: toFixed(2) - два знака после запятой.
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с Вашего депозита: " +  appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for(let i = 1; i < 3; i++)
        {
            let opt = prompt("Статья необязательных расходов?", "")
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');
        // Вводим например: аренда, подработка, чаевые
        appData.income = items.split(',');
        appData.income.push(prompt('может что-то ещё?'));
        appData.income.sort();  //Сортируем массив по имени
    }
};

    // 1. Получить кнопку "Начать расчет" через id
    //***********************************************************
    let startButton = document.getElementById('start');
    //***********************************************************

    // 2. Получить все блоки в правой части программы через классы
    // (которые имеют класс название-value, начиная с
    // <div class="budget-value"></div> и заканчивая
    // <div class="yearsavings-value"></div>)
    //***********************************************************
    console.log("All classes ending on ", "-value");
    let allValueClassnamesEnds = document.querySelectorAll("[class$='-value']");
    allValueClassnamesEnds.forEach(function (item, num, mass){
        console.log(item);
    });
    //***********************************************************

    // 3. Получить поля(input) c обязательными расходами через класс.
    // (class=”expenses-item”)
    //***********************************************************
    let classExpensesItem = document.querySelector('.expenses-item');
    console.log("class=expenses-item", classExpensesItem);
    //***********************************************************

    // 4. Получить кнопки “Утвердить” и “Рассчитать” через Tag,
    // каждую в своей переменной.
    //***********************************************************
    let allButtons = document.getElementsByTagName('button');
    let approveButtons = [],
        calculateButtons = [];
    for (let i = 0; i < allButtons.length; i++)
    {
        if(allButtons[i].innerText == 'Утвердить')
        {
            approveButtons.push(allButtons[i]);
        }
        else if (allButtons[i].innerText == 'Рассчитать')
        {
            calculateButtons.push(allButtons[i]);
        }
    }
    console.log("approveButtons: ");
    approveButtons.forEach(function (item, num, mass){
        console.log(item);
    });
    console.log("calculateButtons: ");
    calculateButtons.forEach(function (item, num, mass){
        console.log(item);
    });
    //***********************************************************

    // 5. Получить поля для ввода необязательных расходов
    // (optionalexpenses-item) при помощи querySelectorAll
    //***********************************************************
    let optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item');
    console.log("optionalexpenses-item classname elements: ");
    optionalexpensesItems.forEach(function (item, num, mass){
        console.log(item);
    });
    //***********************************************************

    // 6. Получить оставшиеся поля через querySelector
    // (статьи возможного дохода, чекбокс, сумма, процент,
    // год, месяц, день)
    //***********************************************************
    // Статьи возможного дохода
    let chooseIncomeEdit = document.querySelector('.choose-income'),
    // Чекбокс
        checkSavingsBox = document.querySelector('#savings'),
    // Сумма
        chooseSumEdit = document.querySelector('#sum'),
    // Процент
        choosePercentEdit = document.querySelector('#percent'),
    // Год
        yearValueEdit = document.querySelector('.year-value'),
    //  Месяц
        monthValueEdit = document.querySelector('.month-value'),
    //  День
        dayValueEdit = document.querySelector('.day-value');


        console.log("Статьи возможного дохода");
        console.log(chooseIncomeEdit);

        console.log("Чекбокс");
        console.log(checkSavingsBox);

        console.log("Сумма");
        console.log(chooseSumEdit);

        console.log("Процент");
        console.log(choosePercentEdit);

        console.log("Год");
        console.log(yearValueEdit);

        console.log("Месяц");
        console.log(monthValueEdit);

        console.log("День");
        console.log(dayValueEdit);
    //***********************************************************
let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

// Привязываем кнопку старта
startBtn.addEventListener('click', function (){
    time = prompt("Введите дату в формате YYYY-VV-DD", ""),
    money = +prompt("Ваш бюджет на месяц?", '');    // Должны быть введены цифры, если не ввести,
    // то в консоль выведется сообщение "Произошла ошибка"
    while(isNaN(money) ||   //  isNaN возврашает true в том случае, когда в неё попадают не цифры.
    money == "" ||  // Введена пустая строка
    money == null)  // Чтобы пользователь не мого нажать кнопку "Отмена".
    {
        money = prompt("Ваш бюджет?", "")
    }
    appData.budget = money;
    appData.timeData = time ;
    // Передали значение на страницу и наш введённый бюджет там отобразился
    budgetValue.textContent = money.toFixed();
    // Дата в html представлена в виде трёх inputs у которых стоит
    // аттрибут "readonly" это значит, что пользователь туда вручную
    // не сможет ввести.
    // Когда мы работаем с inputs с помощью JS правильнее и легче использовать
    // аттрибут "value" а не textContent. Другими словами если у нас есть
    // элемент "input" то мы работаем с value.
    // Как работать с объектом Date можно в интернете
    //  С помощью метода "parse" мы получим дату в виде "time_t"
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    // Пребавляем 1 т.к. нумерация начинается с нуля
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function (){
    let sum = 0;
    // Проходим по всем элементам псевдомасива
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;
        // Если в prompt нажать отмена, то мы получим "null"
        if ((typeof (a) === 'string') &&   // Должна быть строка
            (typeof (a) != null) &&         // Нельзя нажимать отмену в первом окне
            (typeof (b) != null) &&         // Нельзя нажимать отмену во втором окне
            (b != '') &&                   // Обязательно необходимо ввести данные в первое окно
            (a != '') &&                   // Обязательно необходимо ввести данные во второе окно
            (a.length < 50)
        ) {
            console.log("Всё верно");
            // добавляем ключ-значение
            appData.expenses[a] = b;
            sum += +b;  // +b здесь поставлено для того, чтобы интерпертатор
                        // понял, что мы передаём число. Как говорилось ранее,
                        // когда мы получаем данные от пользователей, то мы их
                        // получаем в виде строки и expensesItem[i].value не
                        // исключение, поэтому, чтобы у нас были нормальные
                        // цифровые данные в виде числа ставится '+'.
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
 });

optionalExpensesBtn.addEventListener('click', function () {
    for(let i = 0; i < optionalExpensesItem.length; i++)
    {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
    });

countBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        //toFixed - откидывает дробную часть (округляем),
        // но при этом возваращает строку, это надо помнить.
        // Параметр функции это число, знаков после запятой,
        // которые мы хотим вернуть, Например:
        // toFixed(2) - два знака после запятой.
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    }
    else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }

});

// Здесь мы будем использоувать два события, которое могут
// использоваться в TextArriere, Input и Select, это события
// input и change
// События input возникает тогда, когда мы что то вводим в наш input,
// данное событие генерирется после каждого ввода символа.
// Событие change возникает когда мы убираем фокус (наш курсор)
// с нашего input и где то кликаем в другом месте, то будет сгенерированно
// событие change.
// Событие input намного удобнее.

incomeItem.addEventListener('input', function (){
    let items = incomeItem.value;
    // Вводим например: аренда, подработка, чаевые
    appData.income = items.split(',');

    incomeValue.textContent = appData.income;
 });

checkSavings.addEventListener('click', function() {
    if (appData.saving == true) {
        appData.saving = false;
    }
    else {
        appData.saving = true;
    }
    console.log(appData.saving);
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false,   // true
    chooseExpenses: function () {
    },
    detectDayBudget: function () {
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
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
     },
    chooseIncome: function () {
        appData.income.push(prompt('может что-то ещё?'));
        appData.income.sort();  //Сортируем массив по имени
    }
};

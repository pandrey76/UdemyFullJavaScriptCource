'use strict';

var number = 5;
var strin = "Hello!";
var sym = Symbol();
var boolean = true;
//null
//undefined
var obj = {};

console.log(4/0);   // Infinity
console.log('string'*9);    // NaN

let something_1;
console.log(something_1);  // undefined                      

let person = {
    name: "John",
    age: 25,
    isMarried: true,
};

// Первый способ доступа к элементам объекта
console.log(person.name);   // John

//Второй способ доступа к элементам объекта
console.log(person["name"]);   // John

// Массив
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]);  // plum.png


//Вызов модального окно выбора Ок/Отмена
let answer1 = confirm("Are you here?");
console.log(answer1); // Если ОК, то true, если Отмена, то false.
console.log(typeof(answer1));   // boolean



let answer2 = prompt("Есть ли Вам 18?", "Да");  // Второй параметр - это значение выводимое в диалоге по умолчанию.
                                                // Для того, чтобы это всё работало в IE, всегда второй параметр 
                                                // необходимо добавлять, пусть даже просто добавлять пустые кавычки.
                                                // let answer = prompt("Есть ли Вам 18?", "");
                                                // Результатом работы будет, строка введённая пользователем.
console.log(answer2); // Если Да, то "Да", если Нет, то "Нет", если Наверное, то "Наверное".
console.log(typeof(answer2)); // string

console.log(typeof(person)); // object


console.log(typeof(null)); // object
//Ошибка в языке, здесь мы видим, что null это объект,
// а по нотации языка это отдельный тип данных.
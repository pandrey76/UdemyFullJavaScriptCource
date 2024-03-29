'use strict';   // Эта фраза? директиву ставят в самое начало файла
                //  и она означает, что мы пишем на стандарте ES6 и некоторые ошибки прошлого 
                // работать не будут.
// a = 5;
// console.log(a); // Uncaught ReferenceError: a is not defined at script.js:4
                // Ошибка потому, что стоит директива 'use strict';

// Директиву 'use strict'; всегда рекомендуется использовать.
// Когда мы будем изучать функции, данную директиву можно будет ставить в отдельные функции.
// Единственное ограничение в его работе это IE9 и ниже, но это можно исправить.

console.log("arr" + " - object");    //  arr - object, получили строку
console.log(4 + " - object");    //  4 - object, получили строку

let answer = +prompt("Есть ли Вам 18?", "Да");
console.log(answer);    // NaN
console.log(typeof(answer));    // number
//Потому что унарный плюс, который стоит перед "prompt" у нас превращает строку в число.

console.log(4 + +" - object");    //  NaN, потому что мы произвели нематематические операции

//Операторы Инкремент и Декремент служат для укорочения нашего кода
 
let incr = 10,
    decr = 10; // При такой записи нам не нужно писать кучу "let", но надо
               // обязательно ставить ";" в конце, иначе весь код, который будет идти
               // после этой конструкции, будет воспринят как новая переменная и мы получим ошибку.

incr++;               
decr--;
console.log(incr);  // 11
console.log(decr);  // 9

console.log(++incr);  // 12
console.log(--decr);  // 8

console.log(incr++);  // 12
console.log(decr--);  // 8

console.log(incr);  // 13
console.log(decr);  // 7

console.log(5%2);   // 1

//Оператор равно работает так:
//                              = - присвоение;
//                              == -  проверка на равенство;
//                              === -  строгая проверка по типам данных.

console.log("2" == 2) ;     // true
console.log("2" === 2) ;    // false

let isChecked = true,
    isClosed = true;

console.log(isChecked && isClosed);     // true   

isClosed = false; 
console.log(isChecked && isClosed);     // false   

console.log(isChecked || isClosed);     // true 
isChecked = false; 
console.log(isChecked || isClosed);     // false   

console.log(isChecked || !isClosed);     // true   
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

//console.log(something); // Uncaught ReferenceError: something is 
                        // not defined at script.js:13

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
console.log(arr[1]);  // orange.jpg
console.log(arr[2]);  // apple.bmp

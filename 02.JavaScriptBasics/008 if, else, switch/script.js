'use strict';

if(2*4 == 8)    {
    console.log("Верно!");
} else  {
    console.log("Неверно!");
}   // Верно!

if(1)   {
    console.log("Верно!");
} else  {
    console.log("Неверно!");
}   // Верно!

let num = 50;
if(num < 49)    {
    console.log("Неверно!");
} else if(num > 100)    {
    console.log("Много!");
} else  {
    console.log("Верно!");
}   // Верно!

(num = 50) ? console.log("верно!") : console.log("Неверно!");     // верно!

switch (num)    {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Всё ещё Много!"); 
        break;
    
    //case num == 50: //Данный кусок кода не сработает, результатом работы данного switch будет 'Что-то пошло не так!'
    //Проверка на соответствии определённому значению необходимо делать так:
    case 50:    //Вот теперь результатом работы данного switch будет 'Верно!'
        console.log('Верно!');
        break;
    default:
        console.log('Что-то пошло не так!');
        break;
}   // Верно!
//
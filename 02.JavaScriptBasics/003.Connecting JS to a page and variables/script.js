'use strict';

// Всегда необходимо ставить ';' в конце строки
// В данном конкретном случае мы не поставили символ ';', выполнение кода 
// снизу приведёт к ошибке "Uncaught TypeError: Cannot read property '3' 
// of undefined at script.js:5" (Ошибку видно в консоли)
/*alert(1)
[0,3].push()
*/
// alert(1);
// [0,3].push();

// Если var объявлена в коде, то она уже существует, ещё до выполнения
// скрипта и она видна везде.
console.log(leftBorderWidth); //Undefined - переменная создана но пока она
                              //не имеет никакого значения.    
var leftBorderWidth = 1;

//console.log(second); 
// Так как second определена как let, то в этом месте, до определения 
// переменной,  мы увидим ошибку: "Uncaught ReferenceError: 
//Cannot access 'second' before initialization at script.js:19"


let second = 2;
const pi = 3.14;
console.log(leftBorderWidth); // 1
console.log(second); // 2

// Если рассматривать var и let с позиции оптимизации, то используя let мы
// ускоряем наш код, т.к. наш код не должен хранить теперь все переменные 
// var, а только используют let которые создаются в момент их использования.
// Таким образом код работает быстрее и экономит память браузера. Кроме 
// этого let видна только в блоке кода ограниченного фигурными скобками.

 {
     let secondNext = 2.1;
     console.log(secondNext);   // 2.1
     console.log(second);       // 2
 }

console.log(secondNext);  // Uncaught ReferenceError: secondNext is not 
                          // defined at script.js:42

// const создаёт константу, которую нельзя поменять, мы получим ошибку если 
// попытаемся это сделать, а в остальном аналогично let.Что касается const,
// то совсем констант в JS нет и const обходными путями менять можно.                          
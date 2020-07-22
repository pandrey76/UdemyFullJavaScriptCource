// DOM - (Documents Object Model) объектная модель документа,
// наш html является документом.
//И он представлен в виде дерева узлов. взаимдействующий между
// собой в отношении родительский и дочерний. Коренной тэг "html"
// у него есть такие тэги как "head" и "body" у них в свою очередь
// есть свои тэги.
// Когда верстается сайт создаётся вот такая древовилная структура.
// Это можно представить как обычные ветки и от них отпачковываются
// и ещё другие ветки, т.о. получается такое большое дерево для того,
// чтобы добратся до определённого элемента на странице в DOM
// существуют специальные методы поиска. Мы будем использовать встроенныё
// в любой браузер объект 'document', это и есть наш DOM, которые мы
// будем использовать в JavaScript. если это встроенный объект значит
// у него есть встроееные методы их мы и будем использовать.
// Самый часто используемый способ это "getElementById"

let box = document.getElementById("box");

console.log(box);   // Выведется:  <div class="box" id="box"></div>
//Если на выведенный элемент навести курсор, то в окне подсветится
// имено наш элемент "box".

// Также мы можем использовать поиск по тэгам "getElementsByTagName".
// На странице может быть десятки или сотни одинаковых тэгов. И если с
// "id" всё понятно, на странице он может быть только один, т.к. это
// уникальный идентификатор. Но если мы получаем элементы с помощью тэгов,
// то мы получаем все эти элементы в некоторой коллекции, а точнее в
// псевдомассиве. Псевдомассивы это синтаксически теже массивы, но без всех
// методов таких как "pop", "push", "reduce" т.д. Ранее мы наши переменные
// сравнивали с коробкой в которое помещается какое-то значение, какие-то
// данные, так вот если мы получаем данные с помощью тэгов, например, у нас
// есть 5 "button" и все эти 5 "button" появятся у нас в одной переменной,
// т.е. мы взяли эти пять кнопок и положили в одну коробку и в дальнейшем,
// чтобы их использовать нам необходимо будет указывать какую кнопку мы
// используем первую, вторую или четвёртую.

let btn = document.getElementsByTagName("button");
// Давайте внимательно посмотрим на этот метод, то мы увидим что в названии
// метода присутствует слово "Elements", т.е. множественное число, это
// значит, что элементов может быть много и в результате работы метода
// мы получим псевдомассив, обязательно обращайте на это внимание.

console.log(btn);// HTMLCollection(5) [button, button, button, button, button]
                 // 0: button
                 // 1: button
                 // 2: button
                 // 3: button
                 // 4: button

console.log(btn[0]);    //<button>1</button>
// При помощи индекса мы получаем определённый элемент.
// Аналогнчным способом работает поиск по именам и по названиям классов.
// Элементы могут иметь одинаковые имена и одинаковые классы и по этому
// повторяются по многу раз.

let circle = document.getElementsByClassName('circle');

console.log(circle[2]);     // <div class="circle"></div>

// Однако самым часто используемым методом является "QuerySelector" где в
// скобках мы можем задать любой css селектор, таким образом мы тоже получим
// коллекцию элементов, но почему он такой популярный, во первых получать
// элементы через селекторы это очень удобно. Необходимо напомнить, что css
// селекторы это и классы и id и тэги, даже аттрибуты элементов и даже самое
// главное это вложенность всего перечисленного. Обращаем внимание на
// черезвычайно важную вещь, когда мы получаем класс через селектлор
// обязательно указывайте что это за селектор, если это класс, то мы должны
// поставить точку, если id то решётку, аттрибут квадратные скобки и т.д.
// Вы должны сказать коду что вы именно от него хотите, в отличие от
// стандартных методов getElement...

let heart = document.querySelectorAll('.heart');

console.log(heart);     //  NodeList(3) [div.heart, div.heart, div.heart]
                        //  0: div.heart
                        //  1: div.heart
                        //  2: div.heart
// Работает это точно также как с тэгами и классами

console.log(heart[1]);      //  <div class="heart"></div>

// Одной из частых ошибок новичков является то, что они используют псевдомассив,
// а не получают какой-то конкретный элемент со страницы.
//  Вернёмся к вложенности
// Допустим у нас есть какой-нибудь класс "wrapper" и внутри него есть класс
// "heart" и мы можем использовать такую структуру для доступа к элементу
// let heart1 = document.querySelectorAll('.wrapper .heart');
// и это не будет ошибкой. Это так и работает.
// Второе приемущество, то что псевдомассив полученный с помощью
// "document.querySelectorAll" имеет один метод, это метод "forEach".
// Он позволяет перебрать нашу коллекцию по элементам и с каждым их них
// что-то сделать, например изменить его стили, назначить функции и т.д.

// Последний используемый нами метод, однако с помощью его мы получаем
// только первый элемент нас странице.
// Не забываем ставить точку перед именем класса ".heart"
let oneHeart = document.querySelector('.heart');

// Мы получим первое сердечко, потому что оно у нас первое на странице
// с таким селектором
console.log(oneHeart);      //  <div class="heart"></div>
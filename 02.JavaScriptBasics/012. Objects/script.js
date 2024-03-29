
// Создаём объект
    // let obj = new Object();
// Обычно этим методом никто не пользуется,
// это не удобно и имеет свои технические минусы и
// JSHint будет нам подсказывать, что объекты лучше
// создавать с помощью двух фигурных скобок.
// Любой объект содержет пару ключ: значение
let options = {
    width:  1024,   // какая-нибудь ширина
    height: 1024,    // какая-нибудь высота
    name:   "test", // какое-нибудь имя
};
// Когда вы создаёте объект всегда обращаёте внимание на
// запятую между параметрами внутри объекта,
// если её не будет, то будет ошибка.

// Если мы хотим получит свойства нашего объекта,
// то мы можем это сделать через точку '.'
console.log(options.name);  // Выведется: test

// Точно также как получать свойства объекта мы можем задавать свойства
options.bool = false;
// После знака равенства можно поместить любой тип данных.
// В данном случае мы записали булевый тип. Таким образом в
// наш объект "options" мы записали новую пару.
// свойство "bool", которое равно "false".
// Это тоже самое, что если бы мы прописали наше свойсво в сам объект.
// Однако не всегда мы можем знать какие свойства могут быть у объекта.
// Поэтому мы всегда имеем возможность добавить свойство в объект в
// любом месте нашего кода.

// Создаём объект в объекте "options"
options.colors = {
    border: "black",
    bg: "red",
};
console.log(options);    // Выведется:  { width: 1024,
                                     // height: 1024,
                                     // name: 'test',
                                     // bool: false,
                                     // colors: { border: 'black', bg: 'red' } }

// Кроме добавления свойств в объект мы можем удалять свойства из объекта.
// Сделать это можно с помощью оператора "delete".
delete options.bool;
console.log(options);    // Выведется:  { width: 1024,
                                     // height: 1024,
                                     // name: 'test',
                                     // colors: { border: 'black', bg: 'red' } }

// Представляйте объекты как большие вместилища информации, как шкаф с
// нашими вещами и иногда нам необходимо перебрать все свойства в объекте,
// точно также как вещи в нашем шкафу, посмотреть что там могло заволятся.
// Для этого мы будем использовать специальный цикл
for(let key in options){
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
                                                            // Выведется:
                             // Свойство width имеет значение 1024
                             // Свойство height имеет значение 1024
                             // Свойство name имеет значение test
                             // Свойство colors имеет значение [object Object]
}
// Можно использовать такую запись
console.log(Object.keys(options));  // Выведется:
                                    //  [ 'width', 'height', 'name', 'colors' ]

// Если мы хотим узнать количество свойств внутри объекта, то сделаем следующее
console.log(Object.keys(options).length);  // Выведется:    4

// Также в объект можно записывать и функции, тогда они уже становятся методами
// объекта, т.е. те действия которые может совершать наш объект
// Шкаф например может хранить вещи и например копить пыль.
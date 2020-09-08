let btn = document.getElementsByTagName('button');

// Второй способ - это использовать свойство DOM для событий.

// btn[0].onclick = function () {
//     alert("Вы нажали первую кнопку вторым способом лобавления обработчика событий!");
// };

// Мы разобрались как работают два способа добавления обработчика событий,
// но существует одна проблема, если мы их используем, то таким образом мы можем
// назначить лишь одну функцию на один элемент. Имеется в виду следующее.


// btn[0].onclick = function () {
//     alert("Вы нажали первую кнопку вторым способом лобавления обработчика событий!");
// };
//
// btn[0].onclick = function () {
//     alert("Вы снова нажали первую кнопку вторым способом лобавления обработчика событий!");
// };

// Нажимаем на кнопку на странице то отработает второй обработчик. Получается что более новая
// версия обработчика полностью заменила старую версию. Это не удобно, мы можем забыть, что ранее
// определяли обработчик для этого события в своём коде, потом переназначить и потерять полностью
// функционал или допустим мы работаем с чужим кодом, который мы полностью не проинспектировали и
// произойдут точно такие же проблемы, к тому же иногда нам нужно удалять события после их
// выполнения, а таким образом мы сделать это не сможем, такое тоже бывает мы один раз например
// кликнули на элемент, какой то функционал выполнился и всё при клике на этот элемент ничего
// происходить больше не должно.
//     Поэтому сейчас у нас есть две проблемы:
//     Первая, то что новая функция переназначает старую и полностью её перезаписывает;
// Вторая, то что данное событие мы не можем удалить.
//
//  Будем учится сразу назначать обработчики событий правильно. для этого есть методы:

    btn[0].addEventListener(
                           'click',    // Первый параметр - название события
                                            // Второй параметр - сам обработчик события,
                                            // это обычная callback функция.
                           function () {
           alert("Вы нажали первую кнопку третьим способом добавления обработчика событий!");
    });

    btn[0].addEventListener(
                            'click',
                        function () {
           alert("Вы опять нажали первую кнопку третьим способом добавления обработчика событий!");
    });
    // Мы видим, что выполнился первый обработчик, а за ним выполнился второй обработчик.

    // Добавляем третий обработчик.
    // btn[0].addEventListener(
    //                         'mouseenter', // Наша мышь заходит в пределы нашего элемента
    //                         function () {
    //     alert("Вы навели на первую кнопку.");
    // });

    // Главное, что нам нужно понимать из событий это, то что мы назначаем то что должно происходить
    // (например: click) и потом мы прописываем, т о что по нашему мнению должно произойти после
    // этого события, это две главные части с которыми мы монипулируем.

    // Иногда нам нужно получить какие-то данные о том элементе с которым мы сейчас взаимодействуем,
    // например нам может быть интересно, что за событие произошло или что за элементы используются
    // или возможно нам понадлбятся координаты этого элемента и т.д. Эти данные мы будем
    // использовать в будущем, например мы будем проверять условие: Если мы кликнули на такой-то
    // элемент, то мы будем выполнять такое-то действие. Для этого есть специальный объект Event.
    // И так как это опять же тип данных объект, он тоже имеет свои свойства и какие, то методы,
    // Добавляется он как аргумент нашей функции и его свойства мы можкм уже вызвать внутри её.

    btn[0].addEventListener(
                            'click',
                            function (
                                event // Параметр Event может называтся как угодно.
                                                 // В JS обычно это "event", так просто
                                                 // принято, или "event" или "e". Это делается
                                                 // для того, чтобы другой разработчик сразу
                                                 // мог понять что этот параметр означает.
                            ) {
    // console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
    // Вывелось: Произошло событие: click на элементе [object HTMLButtonElement]

    // alert("Вы нажали первую кнопку третьим способом добавления обработчика событий!");

       // target - цель, сам объект event.
       let target = event.target;

        //target.style.display = 'none';
        // Когда мы кликнем на первую кнопку она исчезнет со странице, но в html коде ничего
        // не поменялось, там осталось три кнопки, первая кнопка есть она никуда не исчезла
        // однакоу у неё изменился стиль, теперь он display: none, поэтому она и не показывается.
        // Таким не сложным образом мы и можем использовать тот элемент с которым мы
        // взаимодействуем и имено так используется объект event.

        console.log(event);
        // В консоль будет выведен наш объект event. самые используемые свойства:
        //    type - тип события;
        //    target - сам объект;
        //    x,y - координаты элемента.
    });

    // Внимание! Небольшой лайфхак. Если мы хотим, чтобы наша вёрствка выглядела прилично, то надо
    // использовать свойство TabSize равное 4, грубо говоря стиль форматирования принятый в Python.

    // Существует такое важное понятие как всплытие событий, не путать со всплытием переменных.
    // Для примера напишем вложенную структуру и каждому элементу назначим событие.
    // возьмём наш элемент button и обернём его в блок "div". При этом кнопка изменило свой
    // местоположение на странице.

    let wrap = document.querySelector('.wrapper');

        btn[0].addEventListener('click',function ( event) {
            console.log('Произошло событие элемента: ' + event.type + ' на элементе ' + event.target);
        });

        wrap.addEventListener('click', function (event) {
        console.log('Произошло событие из обёртки: ' + event.type + ' на элементе ' + event.target);
    });
    // При клике на первую кнопку у нас происходит два события,
    // как видно из логов у нас проичходит два события, т.е. в консоль вывелось
    // Два сообщения:
    //      Произошло событие элемента: click на элементе [object HTMLButtonElement]
    //      Произошло событие из обёртки: click на элементе [object HTMLButtonElement]
    // Сначала сработало событие привязанное именно к данной кнопке, но т.к. у нас есть
    // обработчик и на её обёртке, то у нас произошло и второе событие. У нас как бы произошло
    // поднятие по иерархии, это и есть вскрытие событий и нам важно понимать как она работает
    // В какждом из этих сообщений нам выводится объект button (object HTMLButtonElement),
    // однако отработало оно на двух элементах и если мы посмотрим на наш объект wrapper
    // он имеет довольно сложную структуру и если мы нажмём вне кнопки, то в консоли отобразится
    // Произошло событие из обёртки: click на элементе [object HTMLDivElement], однако как
    // мы видим event.target здесь будет Div тот блок на который мы нажали.
    // При необходимости мы можем поработать с этим всплытием и действительно есть способ отменить
    // это всплытие, но на практике оно практически не используется, т.к. может доставить ещё
    // больше проблем. Так что если нас спросят к примеру на собеседовании, то мы легко теперь
    // сможем сказать, что Всплытие событий - это когда обработчик события сначала срабатывает
    // на самом вложенном элементе, затем на родителе, если у него такой есть, а затем выше и выше.

    // Гораздо важнее уметь отменять стандартные события в браузере, как мы помним клик по ссылке
    // продолжается переходом на другую страницу или на другой URL точно также работает и форма
    // если мы нажимаем кнопку где есть аттрибут Submit, то мы эту форму отправляем или есть более
    // банальное событие, когда мы два раза кликаем на какой-то большой текст, то мы его выделяем
    // и т.д. Это и есть стандартное поведение браузера, но мы можем и в некоторых случаях это даже
    // нужно отменять это поведение, для этого есть два способа

    let  link = document.querySelector('a');

    link.addEventListener('click', function (event) {
       //console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
       // При клике на ссылку, ничего не произойдёт, мы не увидим в консоли сообщение о событии
       // потому что мы просто переёдём на другой сайт.
       // Для того чтобы этого не происходило надо научится отменять стандартное поведение браузера
       // Первый способ это в конце нашего обработчика вернуть false (return false).
        //return false;
        // Действительно первый способ не сработал!!

        //Однако это довольно устаревший и костыльный метод, который не всегда работает, намного
        // лучше воспользоваться встроенным методом "event.preventDefault()".
        event.preventDefault();
        console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
        // Теперь когда я кликаю на ссылку мы ни на какой сайт не переходим как раз в этом
        // и заключается цель команды "preventDefault". Работать с ней мы будем довольно
        // часто особено когда научимся отправлять данные без перезагрузки страницы как раз
        // там данный метод имеет огромную роль.
    });

    // Последнее о чём необходимо поговорить, это то как правильно назначать один и тот же
    // обработчик события на множество элементов. У нас есть псевдомасив с кнопками и мы
    // использовали каждую из них с определённым индексом в своей работе. Далее мы будем
    // использовать метод forEach. Для того, чтобы он появился нам необходимо сформировать
    // псевдомассив через метод querySelectorAll
    let buttons = document.querySelectorAll('button');
    // Сейчас наша задача, чтобы на каждую кнопку в псевдомасиве повесить один и тотже
    // обработчик. Поэтому нам необходим только первый параметр "item" а остальные два
    // параметра (номер элемента и сам псевдомасив) мы опускаем. item - это каждая кнопка
    // на странице
    buttons.forEach(function (item) {
        item.addEventListener('mouseleave', function (event) {
           console.log("Вышли из контура кнопки c координатами x:" + event.x + ' и y: ' + event.y);
        });
    // Мы видим, что все обработчики отработали корректно и это самый предпочтительный
    // метод для назначения обработчика событий, похожим образом мы бы могли перебрать
    // все наши кнопки и навесить обработчики событий при помощи цикла, однако это не
    // совсем корректный способ и jsHint нам об этом скажет, это конечно не ошибка и
    // это допускается и это всего-лишь нарушение некоторых внегласных правил.

    });
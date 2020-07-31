
let menuItems = document.querySelectorAll('.menu-item');

// let menuItem = menuItems[2];
//     menuItems[2] = menuItems[1];
//     menuItems[1] = menuItem;

   console.log(menuItems);

    menuItems.forEach(function (item, num, convertedMenu){
       console.log(item);
    //    document.body.(item);
   });

    // Получаем элемент menu
    let baseMenuItems = document.querySelector('header nav .menu');
    console.log("baseMenuItems: ", baseMenuItems);

    // Удаляем второй пункт меню
    //baseMenuItems.removeChild(menuItems[2]);

    // Восстановливаем порядок в меню
    // *************************************************************
    baseMenuItems.insertBefore(menuItems[2], menuItems[1]);
    // *************************************************************

    // Добавляем пятый пункт меню
    // *************************************************************
    let menuItem = menuItems[0].cloneNode(false);
    console.log('New menu item: ', menuItem);
    menuItem.textContent = 'Пятый пункт меню';
    console.log('Fifth menu item: ', menuItem);
    baseMenuItems.appendChild(menuItem);
    // *************************************************************

    // Заменяем картинку заднего фона на другую из папки img
    // *************************************************************
    document.body.style.backgroundImage = "url('img/apple_true.jpg')";
    // *************************************************************

    // Поменять заголовок, добавляем слово "подлинную"
    // должно получится ( "Мы продаем только подлинную технику Apple")
    // *************************************************************
    let title = document.querySelector('.title');
    title.textContent = "Мы продаем только подлинную технику Apple";
    // *************************************************************

    // Удаляем рекламу со страницы
    // *************************************************************
    let column = document.querySelectorAll('.column'),
        adv = document.querySelector('.adv');
        console.log('column: ', column);
        console.log('adv', adv);
        column[1].removeChild(adv);
    // *************************************************************

    // Спрашиваем у пользователя отношение к технике apple
    // и записываем ответ в блок на странице с id "prompt"
    // *************************************************************
    let promptBlock = document.getElementById('prompt'),
        message= prompt("Please, type few words about Apple");
        promptBlock.textContent = message;
    // *************************************************************

    // *************************************************************

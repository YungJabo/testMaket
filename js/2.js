// 2 функция

const getAllParams = () => {
  const params = document.querySelectorAll(".tab-pane-product-parameter-item");
  const objParams = {};
  Array.from(params).map((element) => {
    const parameterName = element
      .querySelector(".parameter-name")
      .childNodes[0].textContent.trim();
    const parameterValue =
      element.querySelector(".parameter-value").textContent;
    objParams[parameterName] = parameterValue;
  });
  console.log(objParams);
};

// Здесь мы ищем все узлы с классом “tab-pane-product-parameter-item”.
// Идем по каждому элементу и вытаскиваем ключ-значение. Для ключа мы используем childNodes[0], чтобы обратиться только первому дочернему узлу (к тексту), тк там еще есть доп информация, которая не нужна в нашем итоговом объекте. trim() убираем ненужные пробелы и получаем итоговый объект.
// В консоли можно увидеть объект с ключами и значениями: "Object ( "Тип": "смеситель", "Назначение": "для раковины", "Производитель": "Bravat", "Коллекция": "Art", "Страна": "Германия/Китай",
// ""Управление": "рычажное", "Механизм": "керамический картридж", "Производитель картриджа": "Кегах", "*
// "Материал": "латунь".
// "Артикул": "177415"
// "Вращение излива":
// "фиксированный"
// "Высота излива (см)":
// "6"
// "Гарантия": "10 лет - на корпус смесителя, 5 лет - на картридж"
// "Длина излива (см)": "10"
// "Для детского санузла": "нет"
// "Донный клапан":
// "нет"
// "Код товара": "006768"
// "Коллекция": "Art"
// "Материал": "латунь"
// "Механизм": "керамический картридж"
// "Монтаж": "на раковину"
// "Назначение": "для раковины"
// "Оснащение": "аэратор"
// "Покрытие": "глянцевое"
// "Производитель": "Bravat"
// ""Производитель картриджа": "Кегах"
// ""срок поставки"; "1-2 недели"
// ""Стандарт подводки, дюйм":

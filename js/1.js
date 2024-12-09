// 1 функция
const getAllProductsIds = () => {
  const products = document.querySelectorAll("[data-product-id]");
  const productIds = Array.from(products).map((element) =>
    element.getAttribute("data-product-id")
  );
  console.log(productIds);
};
getAllProductsIds();

// Используя “querySelectorAll” находим все элементы div с атрибутом “data-product-id”.
// Затем с помощью метода getAttribute("data-product-id") вытаскиваем значение заданного атрибута. Мы это делаем в методе map для всех найденных элементов. С помощью map получаем новый массив уже только с атрибутами наших товаров.
// В результате в консоли можно увидеть массив: »Array(124) [ "16223130", "16652590", "1173894", "16851199", "6427700", "16652596", "16652594", "16717643", "7761297", "15111300", … ]

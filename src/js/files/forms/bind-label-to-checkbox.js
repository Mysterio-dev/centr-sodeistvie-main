// Находим все теги <timeList__item input> с атрибутом type="checkbox"
const checkboxes = document.querySelectorAll(".timeList__item > input[type=checkbox]");

// Проверяем наличие найденных элементов
if (checkboxes.length > 0) {
  let checkboxCount = 1;

  // Для каждого элемента устанавливаем уникальный id и связываем его с тегом <label>
  checkboxes.forEach((checkbox) => {
    const checkboxId = `item${checkboxCount}`;
    checkbox.id = checkboxId;
    const label = checkbox.nextElementSibling;
    label.setAttribute("for", checkboxId);
    checkboxCount++;
  });
} else {
  // Если на странице не найдены элементы с типом "checkbox", выполняем другой код (если он есть)
}

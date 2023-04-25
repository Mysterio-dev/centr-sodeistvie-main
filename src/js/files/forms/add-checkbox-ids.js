// Получаем все элементы на странице с классом "checkboxTime__input"
const checkboxTime = document.querySelectorAll(".checkboxTime__input");

// Итерируемся по массиву checkboxTime
checkboxTime.forEach((checkbox, index) => {
  // Создаем уникальный идентификатор
  const id = `t_${index + 1}`;
  // Устанавливаем атрибут "id" для элемента checkbox
  checkbox.setAttribute("id", id);
  // Получаем элемент label и устанавливаем атрибут "for"
  const label = checkbox.nextElementSibling;
  label.setAttribute("for", id);
});

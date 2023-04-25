// Получаем все элементы input типа checkbox внутри элементов с классом "workTime__item"
const checkboxesWorkTime = document.querySelectorAll('.workTime__item input[type="checkbox"]');

// Итерируемся по массиву checkboxesWorkTime
checkboxesWorkTime.forEach((checkbox) => {
  // Получаем ближайший элемент с классом "workTime__item" к checkbox
  const item = checkbox.closest(".workTime__item");
  
  // Если checkbox не отмечен, добавляем класс "disabled" к элементу item
  if (!checkbox.checked) {
    item.classList.add("disabled");
  }

  // Добавляем обработчик события "change" для checkbox
  checkbox.addEventListener("change", () => {
    // Если checkbox отмечен, удаляем класс "disabled" у элемента item
    if (checkbox.checked) {
      item.classList.remove("disabled");
    } else { // Если checkbox не отмечен, добавляем класс "disabled" к элементу item
      item.classList.add("disabled");
    }
  });
});

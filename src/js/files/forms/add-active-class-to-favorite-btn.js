// Находим все элементы на странице с классом "btn__favorite" и сохраняем их в переменной btnFavorite
const btnFavorite = document.querySelectorAll(".btn__favorite");

// Для каждого элемента в списке btnFavorite добавляем обработчик события "click"
btnFavorite.forEach(function (e) {
  e.addEventListener("click", function () {
    // При каждом клике на элемент toggle-им класс "_active"
    this.classList.toggle("_active");
  });
});

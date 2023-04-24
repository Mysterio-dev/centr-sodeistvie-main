function setAvatar(src) {
  // Находим элемент с id "avatar-image"
  let avatarImage = document.getElementById("avatar-image");
  if (avatarImage) {
    // Если элемент найден, устанавливаем новый src
    avatarImage.src = src;

    // Находим элементы для закрытия всплывающего окна
    const popup = document.getElementById("popup-avatar");
    const html = document.querySelector("html");

    // Удаляем классы для отображения всплывающего окна и блокировки прокрутки
    popup.classList.remove("popup_show");
    html.classList.remove("popup-show", "lock");

    // Добавляем атрибут aria-hidden для доступности
    popup.setAttribute("aria-hidden", "true");
  } else {
    // Если элемент не найден, выводим ошибку в консоль
    //   console.error("Элемент c id 'avatar-image' не найден");
  }
}

// Ждем загрузки DOM и находим все элементы с классом "popup__avatar-item"
document.addEventListener("DOMContentLoaded", function () {
  let avatarItems = document.querySelectorAll(".popup__avatar-item img");

  // Добавляем обработчик клика на каждый элемент
  avatarItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Находим значение атрибута data-src и передаем его в функцию setAvatar
      let src = this.getAttribute("data-src");
      setAvatar(src);
    });
  });
});

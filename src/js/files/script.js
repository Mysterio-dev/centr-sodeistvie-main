import { isMobile } from "./functions.js";
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", function () {


  // Функцию загрузки preloader
  function hidePreloader() {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("fade-out");

    setTimeout(() => {
      preloader.style.display = "none";
    }); // время анимации затухания (0.5 секунды)
  }

  window.onload = function () {
    hidePreloader();
  };

  // Находим кнопку "Прикрепить документ" и элемент input с типом file
  const attachBtn = document.querySelector(".btn__attach");
  const docUpload = document.querySelector("#doc-upload");

  if (attachBtn && docUpload) {
    // Добавляем обработчик события клика на кнопку "Прикрепить документ"
    attachBtn.addEventListener("click", function () {
      // Вызываем метод click() для элемента input с типом file, который открывает окно выбора файла
      docUpload.click();
    });
  } else {
  }

  

  const radioButtons = document.querySelectorAll(
    ".аmount__root input[type=radio]"
  );

  radioButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Сбрасываем выбор у всех радиокнопок
      radioButtons.forEach((button) => (button.checked = false));
      // Выбираем только текущую радиокнопку
      button.checked = true;
    });
  });


  const amountPlaceholder = document.querySelector(
    ".amountOther__root input[type=number]"
  );
  if (amountPlaceholder) {
    amountPlaceholder.addEventListener("focus", () => {
      amountPlaceholder.placeholder = "";
    });

    amountPlaceholder.addEventListener("blur", () => {
      amountPlaceholder.placeholder = "Другая сумма";
    });
  }

  const amountOtherInput = document.querySelector(".amountOther__input");
  const amountInputs = document.querySelectorAll(".аmount__input");
  if (amountOtherInput && amountInputs.length > 0) {
    amountOtherInput.addEventListener("focus", function () {
      amountInputs.forEach(function (input) {
        input.checked = false;
      });
    });

    amountOtherInput.addEventListener("click", function () {
      amountInputs.forEach(function (input) {
        input.checked = false;
      });
    });
  }

});




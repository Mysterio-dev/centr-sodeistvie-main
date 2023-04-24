import { isMobile } from "./functions.js";
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", function () {
  const btnFavorite = document.querySelectorAll(".btn__favorite");

  btnFavorite.forEach(function (e) {
    e.addEventListener("click", function () {
      this.classList.toggle("_active");
    });
  });

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

  // Находим все теги <timeList__item input> с атрибутом type="checkbox"
  const checkboxes = document.querySelectorAll(
    ".timeList__item > input[type=checkbox]"
  );

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
  }

  // Находим все теги <tDateList__item input> с атрибутом type="checkbox"
  const checkboxesdate = document.querySelectorAll(
    ".dateList__item > input[type=checkbox]"
  );

  // Проверяем наличие найденных элементов
  if (checkboxesdate.length > 0) {
    let checkboxCount = 1;

    // Для каждого элемента устанавливаем уникальный id и связываем его с тегом <label>
    checkboxesdate.forEach((checkbox) => {
      const checkboxId = `date${checkboxCount}`;
      checkbox.id = checkboxId;
      const label = checkbox.nextElementSibling;
      label.setAttribute("for", checkboxId);
      checkboxCount++;
    });
  } else {
  }



  const checkboxesWorkTime = document.querySelectorAll(
    '.workTime__item input[type="checkbox"]'
  );

  checkboxesWorkTime.forEach((checkbox) => {
    const item = checkbox.closest(".workTime__item");
    if (!checkbox.checked) {
      item.classList.add("disabled");
    }

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        item.classList.remove("disabled");
      } else {
        item.classList.add("disabled");
      }
    });
  });

  const checkboxTime = document.querySelectorAll(".checkboxTime__input");
  checkboxTime.forEach((checkbox, index) => {
    const id = `t_${index + 1}`;
    checkbox.setAttribute("id", id);
    const label = checkbox.nextElementSibling;
    label.setAttribute("for", id);
  });




  










});




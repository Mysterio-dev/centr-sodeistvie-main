// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение календаря
import Datepicker from 'vanillajs-datepicker/Datepicker';
import ru from 'vanillajs-datepicker/locales/ru';

Object.assign(Datepicker.locales, ru);

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
  }, 100); // время анимации затухания (0.5 секунды)
}

window.onload = function () {
  hidePreloader();
};

// Находим кнопку "Прикрепить документ" и элемент input с типом file
const attachBtn = document.querySelector('.btn__attach');
const docUpload = document.querySelector('#doc-upload');

if (attachBtn && docUpload) {
// Добавляем обработчик события клика на кнопку "Прикрепить документ"
attachBtn.addEventListener('click', function() {
  // Вызываем метод click() для элемента input с типом file, который открывает окно выбора файла
      docUpload.click();
    });
} else {}



const elem = document.querySelector('input[name="date"]');
const datepicker = new Datepicker(elem, {
  language: 'ru',
  autohide: true,
  clearButton: true,
  minDate: new Date()
});



const elem1 = document.querySelector('input[name="date1"]');
const datepicker1 = new Datepicker(elem1, {
  language: 'ru',
  autohide: true,
  clearButton: true,
  format: 'dd M.', // форматирование даты
  minDate: new Date() // установка опции minDate на сегодняшнюю дату
});



const radioButtons = document.querySelectorAll('.аmount__root input[type=radio]');

radioButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Сбрасываем выбор у всех радиокнопок
    radioButtons.forEach(button => button.checked = false);
    // Выбираем только текущую радиокнопку
    button.checked = true;
  });
});



const amountPlaceholder = document.querySelector('.amountOther__root input[type=number]');
if (amountPlaceholder) {
  amountPlaceholder.addEventListener('focus', () => {
    amountPlaceholder.placeholder = '';
  });

  amountPlaceholder.addEventListener('blur', () => {
    amountPlaceholder.placeholder = 'Другая сумма';
  });
}

const amountOtherInput = document.querySelector('.amountOther__input');
const amountInputs = document.querySelectorAll('.аmount__input');
if (amountOtherInput && amountInputs.length > 0) {
  amountOtherInput.addEventListener('focus', function() {
    amountInputs.forEach(function(input) {
      input.checked = false;
    });
  });

  amountOtherInput.addEventListener('click', function() {
    amountInputs.forEach(function(input) {
      input.checked = false;
    });
  });
}



// Находим все теги <timeList__item input> с атрибутом type="checkbox"
const checkboxes = document.querySelectorAll('.timeList__item > input[type=checkbox]');

// Проверяем наличие найденных элементов
if (checkboxes.length > 0) {
  let checkboxCount = 1;

  // Для каждого элемента устанавливаем уникальный id и связываем его с тегом <label>
  checkboxes.forEach(checkbox => {
    const checkboxId = `item${checkboxCount}`;
    checkbox.id = checkboxId;
    const label = checkbox.nextElementSibling;
    label.setAttribute('for', checkboxId);
    checkboxCount++;
  });
} else {
}

// Находим все теги <tDateList__item input> с атрибутом type="checkbox"
const checkboxesdate = document.querySelectorAll('.dateList__item > input[type=checkbox]');

// Проверяем наличие найденных элементов
if (checkboxesdate.length > 0) {
  let checkboxCount = 1;

  // Для каждого элемента устанавливаем уникальный id и связываем его с тегом <label>
  checkboxesdate.forEach(checkbox => {
    const checkboxId = `date${checkboxCount}`;
    checkbox.id = checkboxId;
    const label = checkbox.nextElementSibling;
    label.setAttribute('for', checkboxId);
    checkboxCount++;
  });
} else {
}






// const formUploadLabel = document.querySelector('.form-upload__label');
// const fileInput = document.querySelector('.form-upload__file-input');

// if (fileInput) {
//   fileInput.addEventListener('change', () => {
//     const file = fileInput.files[0];
//     const reader = new FileReader();

//     reader.addEventListener('load', () => {
//       const photoWrapper = document.querySelector('.form-upload__photo');
//       photoWrapper.innerHTML = ''; // очищаем содержимое
//       const img = document.createElement('img');
//       img.src = reader.result;
//       img.alt = 'photo';
//       photoWrapper.appendChild(img);
//       const iconCamera = document.querySelector('.icon__camera');
//       iconCamera.style.display = 'none';
//     });

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   });
// }

// if (formUploadLabel) {
//   formUploadLabel.addEventListener('click', () => {
//     if (fileInput) {
//       fileInput.click();
//     }
//   });
// }


// const dateList = document.querySelector('.dateList');
// const today = new Date();

// for (let i = 0; i < 7; i++) {
//   const date = new Date();
//   date.setDate(today.getDate() + i);
//   const formattedDate = date.toLocaleDateString('ru-RU', {weekday: 'short'});
//   const li = document.createElement('li');
//   li.classList.add('dateList__item');
//   const input = document.createElement('input');
//   input.type = 'checkbox';
//   input.id = `date${i+1}`;
//   const label = document.createElement('label');
//   label.setAttribute('for', `date${i+1}`);
//   const spanDate = document.createElement('span');
//   spanDate.classList.add('date');
//   spanDate.textContent = date.getDate();
//   if (date.getDate() === today.getDate()) {
//     label.textContent = 'Сегодня';
//     li.classList.add('active');
   
//   }
//   label.appendChild(spanDate);
//   label.innerHTML += '' + formattedDate;
//   li.appendChild(input);
//   li.appendChild(label);
//   dateList.appendChild(li);
// }
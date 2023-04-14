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

const elem2 = document.querySelector('input[name="formDate"]');
const datepicker2 = new Datepicker(elem2, {
  autohide: true,
  clearButton: true,
  format: 'd MM yyyy',
  language: 'ru'
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


document.addEventListener('DOMContentLoaded', () => {
  
  const photoUpload = document.getElementById('photo-upload');
  const formUploadPhoto = document.querySelector('.form-upload__photo');
  const formUploadText = document.querySelector('.form-upload__text');
  
  photoUpload.addEventListener('change', () => {
    const file = photoUpload.files[0];
    const reader = new FileReader();
    const img = document.createElement('img');
  
    reader.addEventListener('load', () => {
      img.src = reader.result;
      formUploadPhoto.innerHTML = ''; // Очистить контейнер formUploadPhoto
      formUploadPhoto.appendChild(img); // Добавить img в контейнер formUploadPhoto
      formUploadPhoto.classList.add('loaded'); // Добавить класс loaded
    });
  
    if (file) {
      reader.readAsDataURL(file);
      formUploadText.textContent = `${file.name}`;
    } else {
      formUploadText.textContent = 'Загрузить фото';
    }
  });
  

const input = document.querySelector('#productImage');
const imagesList = document.querySelector('#prodImages');

// Обрабатываем событие выбора файлов
input.addEventListener('change', (event) => {
  const files = event.target.files;
  if (!files) return;

  // Обходим все выбранные файлы
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Создаем новый элемент списка изображений
    const listItem = document.createElement('li');
    listItem.setAttribute('data-ord', imagesList.children.length + 1);

    // Создаем новый элемент с изображением или эскизом документа
    const label = document.createElement('label');
    label.setAttribute('for', `product_img_${file.name}`);

    const span = document.createElement('span');
    span.classList.add('deleteImage');
    span.setAttribute('data-id', '');
    span.setAttribute('data-ord', imagesList.children.length + 1);

    span.addEventListener('click', () => {
      imagesList.removeChild(listItem);
      input.value = '';
    });

    const div = document.createElement('div');

    // Если выбранный файл является PDF-документом, загружаем его и создаем эскиз
    if (file.type === 'application/pdf') {
      // Создаем элемент canvas
      const canvas = document.createElement('canvas');
    
      // Загружаем PDF-файл
      const fileReader = new FileReader();
      fileReader.onload = function() {
        const typedarray = new Uint8Array(this.result);
        pdfjsLib.getDocument({data: typedarray}).promise.then(function(pdf) {
          pdf.getPage(1).then(function(page) {
            const viewport = page.getViewport({ scale: 1 });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
    
            // Отображаем страницу PDF-файла на элементе canvas
            const context = canvas.getContext('2d');
            const renderContext = {
              canvasContext: context,
              viewport: viewport
            };
            page.render(renderContext).promise.then(function() {
                // Добавляем стили для canvas
                canvas.style.maxWidth = '100%';
                canvas.style.maxHeight = '100%';
                canvas.style.display = 'block';

              div.appendChild(canvas);
            });
          });
        });
      };
      fileReader.readAsArrayBuffer(file);
    } 
    
    // Если выбранный файл является изображением, создаем эскиз изображения
    else {
      div.style.backgroundImage = `url('${URL.createObjectURL(file)}')`;
    }

    // Добавляем все элементы на страницу
    label.appendChild(span);
    label.appendChild(div);
    listItem.appendChild(label);
    imagesList.appendChild(listItem);
  }
});

const priceInput = document.querySelector("#price-input");
if (priceInput) {
  priceInput.addEventListener("input", function(event) {
     // Оставляем только цифры
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    // Добавляем пробелы между разрядами
    const formattedValue = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
     // Добавляем знак ₽ к концу
    event.target.value = formattedValue + " ₽";
  });
}

priceInput.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    const currentValue = event.target.value.replace(/[^0-9]/g, "");
    event.target.value = currentValue.slice(0, -1);
    event.preventDefault();
  }
});


const checkboxes = document.querySelectorAll('.workTime__item input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  const item = checkbox.closest('.workTime__item');
  if (!checkbox.checked) {
    item.classList.add('disabled');
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      item.classList.remove('disabled');
    } else {
      item.classList.add('disabled');
    }
  });
});

const checkboxTime = document.querySelectorAll('.checkboxTime__input');
checkboxTime.forEach((checkbox, index) => {
  const id = `t_${index + 1}`;
  checkbox.setAttribute('id', id);
  const label = checkbox.nextElementSibling;
  label.setAttribute('for', id);
});


});

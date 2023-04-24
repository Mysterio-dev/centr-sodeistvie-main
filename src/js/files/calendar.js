// Подключение календаря
import Datepicker from "vanillajs-datepicker/Datepicker";
import ru from "vanillajs-datepicker/locales/ru";

Object.assign(Datepicker.locales, ru);


document.addEventListener("DOMContentLoaded", function () {
const elem = document.querySelector('input[name="date"]');
const datepicker = new Datepicker(elem, {
  language: "ru",
  autohide: true,
  clearButton: true,
  minDate: new Date(),
});

const elem1 = document.querySelector('input[name="date1"]');
const datepicker1 = new Datepicker(elem1, {
  language: "ru",
  autohide: true,
  clearButton: true,
  format: "dd M.", // форматирование даты
  minDate: new Date(), // установка опции minDate на сегодняшнюю дату
});

const elem2 = document.querySelector('input[name="formDate"]');
const datepicker2 = new Datepicker(elem2, {
  autohide: true,
  clearButton: true,
  format: "d MM yyyy",
  language: "ru",
  minDate: new Date(),
});

 
const elem4 = document.querySelector('input[name="formDateEnd"]');
const datepicker4 = new Datepicker(elem4, {
  autohide: true,
  clearButton: true,
  format: "d MM yyyy",
  language: "ru",
  minDate: new Date(),
});

});
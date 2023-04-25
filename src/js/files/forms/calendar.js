// Подключение календаря
import Datepicker from "vanillajs-datepicker/Datepicker";
import ru from "vanillajs-datepicker/locales/ru";

Object.assign(Datepicker.locales, ru);

const elem = document.querySelector('input[name="date"]');
const datepicker = elem ? new Datepicker(elem, {
  language: "ru",
  autohide: true,
  clearButton: true,
  minDate: new Date(),
}) : null;

const elem1 = document.querySelector('input[name="date1"]');
const datepicker1 = elem1 ? new Datepicker(elem1, {
  language: "ru",
  autohide: true,
  clearButton: true,
  format: "dd M.", // форматирование даты
  minDate: new Date(), // установка опции minDate на сегодняшнюю дату
}) : null;

const elem2 = document.querySelector('input[name="formDate"]');
const datepicker2 = elem2 ? new Datepicker(elem2, {
  autohide: true,
  clearButton: true,
  format: "d MM yyyy",
  language: "ru",
  minDate: new Date(),
}) : null;

const elem4 = document.querySelector('input[name="formDateEnd"]');
const datepicker4 = elem4 ? new Datepicker(elem4, {
  autohide: true,
  clearButton: true,
  format: "d MM yyyy",
  language: "ru",
  minDate: new Date(),
}) : null;

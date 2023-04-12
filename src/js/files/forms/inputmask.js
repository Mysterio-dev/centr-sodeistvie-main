/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasksPhone = document.querySelectorAll('.phone-mask');
const inputSeriesPassport = document.querySelectorAll('.passportSeriesMask');
const inputNumberPassport = document.querySelectorAll('.passportNumberMask');

if (inputMasksPhone.length) {
	flsModules.inputMasksPhone = Inputmask({"mask": "+7(999) 999-99-99"}).mask(inputMasksPhone);
};

if (inputMasksPhone.length) {
	flsModules.inputSeriesPassport = Inputmask({"mask": "99 99"}).mask(inputSeriesPassport);
};

if (inputMasksPhone.length) {
	flsModules.inputNumberPassport = Inputmask({"mask": "999 999"}).mask(inputNumberPassport);
};
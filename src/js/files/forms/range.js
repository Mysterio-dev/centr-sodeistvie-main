// Подключение из node_modules
import * as noUiSlider from "nouislider";

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
  const priceSlider = document.querySelector("#range");
  if (priceSlider) {
    const inputMin = document.getElementById("minPrice");
    const inputMax = document.getElementById("maxPrice");
    if (!range || !inputMin || !inputMax) return; 
    const inputs = [inputMin, inputMax]; 

    noUiSlider.create(range, {
      start: [100, 750], 
      connect: true, 
      range: {
        min: 0,
        max: 800,
      },
      step: 1, 
    });

    range.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = parseInt(values[handle]);
    });

    inputMin.addEventListener("change", function () {
      range.noUiSlider.set([this.value, null]);
    });

    inputMax.addEventListener("change", function () {
      range.noUiSlider.set([null, this.value]);
    });
  }
}

rangeInit();

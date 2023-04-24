// Задает всем input уникальный id и for к label, также добавляет класс .filled если input будет заполнен

const inputs = document.querySelectorAll(".form-control__input"); // выбираем все элементы input
inputs.forEach((input, index) => {
  const inputId = `input-${index}`; // генерируем уникальный id для каждого input
  const label = input
    .closest(".form-control")
    .querySelector(".form-control__label");

  if (label) {
    label.setAttribute("for", inputId);
    input.setAttribute("id", inputId);
  }

  // Дополнительный код для изменения цвета label
  if (input.value.trim() !== "") {
    label.classList.add("filled");
  }
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      label.classList.add("filled");
    } else {
      label.classList.remove("filled");
    }
  });
});

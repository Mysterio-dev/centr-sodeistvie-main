const priceInput = document.querySelector("#price-input");
if (priceInput) {
  priceInput.addEventListener("input", function (event) {
    // Оставляем только цифры
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    // Добавляем пробелы между разрядами
    const formattedValue = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // Добавляем знак ₽ к концу
    event.target.value = formattedValue + " ₽";
  });

priceInput.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    const currentValue = event.target.value.replace(/[^0-9]/g, "");
    event.target.value = currentValue.slice(0, -1);
    event.preventDefault();
  }
});
}
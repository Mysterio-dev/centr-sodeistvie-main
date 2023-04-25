
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
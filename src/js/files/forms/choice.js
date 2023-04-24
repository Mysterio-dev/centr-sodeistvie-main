document.addEventListener("DOMContentLoaded", function () {
  // Находим кнопку "Добавить" и поле ввода
  const addBtn = document.querySelector("#addButton");
  const inputChoice = document.querySelector(".cid");
  const choiceList = document.querySelector("#choiceList");

  // Добавляем обработчик клика на кнопку "Добавить"
  addBtn.addEventListener("click", addItem);

  // Добавляем обработчик события 'keydown' для поля ввода
  inputChoice.addEventListener("keydown", handleInputKeydown);

  // Находим все элементы с классом 'choice__item' и добавляем обработчик события для каждого элемента
  const items = document.querySelectorAll("#choiceList .choice__item");
  items.forEach((item) => {
    const btn = item.querySelector(".choice__btn-del");
    btn.addEventListener("click", removeItem);
  });

  // Функция для добавления нового элемента
  function addItem() {
    // Проверяем, что поле ввода не пустое
    if (inputChoice.value.trim() === "") {
      return;
    }
    // Создаем новый элемент и добавляем его в список
    const newItem = createItem(inputChoice.value);
    choiceList.appendChild(newItem);

    // Очищаем поле ввода
    inputChoice.value = "";

    // Добавляем обработчик события для кнопки удаления
    const btn = newItem.querySelector(".choice__btn-del");
    btn.addEventListener("click", removeItem);

    // Удаляем классы 'popup-show' и 'lock' и изменяем атрибут 'aria-hidden'
    const popup = document.getElementById("popup-choice-1");
    const html = document.querySelector("html");
    popup.classList.remove("popup_show");
    html.classList.remove("popup-show", "lock");
    popup.setAttribute("aria-hidden", "true");
  }

  // Функция для создания нового элемента
  function createItem(value) {
    // Создаем новый элемент и задаем ему класс 'choice__item'
    const item = document.createElement("li");
    item.classList.add("choice__item");

    // Создаем элемент с иконкой и добавляем его в новый элемент
    const icon = document.createElement("i");
    icon.classList.add("icon__del");
    const btn = document.createElement("button");
    btn.classList.add("choice__btn-del");
    btn.appendChild(icon);
    item.appendChild(btn);

    // Создаем элемент с названием и добавляем его в новый элемент
    const name = document.createElement("h4");
    name.classList.add("choice__name");
    name.textContent = value;
    item.appendChild(name);

    return item;
  }

  // Функция для удаления элемента
  function removeItem(event) {
    // Находим элемент, который нужно удалить
    const item = event.target.closest(".choice__item");
    if (item) {
      // Удаляем элемент из списка
      item.remove();
    }
  }

  // Обработчик события для поля ввода
  function handleInputKeydown(event) {
    // Проверяем, была ли нажата клавиша Enter
    if (event.keyCode === 13) {
      addItem();
    }
  }


  const addBtn2 = document.querySelector("#addButton-2");
  const inputChoice2 = document.querySelector(".cid-2");
  const choiceList2 = document.querySelector("#choiceList-2");

  addBtn2.addEventListener("click", addItem2);

  inputChoice2.addEventListener("keydown", handleInputKeydown2);

  const items2 = document.querySelectorAll("#choiceList-2 .choice__item");
  items2.forEach((item) => {
    const btn = item.querySelector(".choice__btn-del");
    btn.addEventListener("click", removeItem2);
  });

  function addItem2() {
    if (inputChoice2.value.trim() === "") {
      return;
    }

    const newItem = createItem(inputChoice2.value);
    choiceList2.appendChild(newItem);

    inputChoice2.value = "";

    const btn = newItem.querySelector(".choice__btn-del");
    btn.addEventListener("click", removeItem2);

    const popup = document.getElementById("popup-choice-2");
    const html = document.querySelector("html");
    popup.classList.remove("popup_show");
    html.classList.remove("popup-show", "lock");
    popup.setAttribute("aria-hidden", "true");
  }

  function createItem(value) {
    const item = document.createElement("li");
    item.classList.add("choice__item");

    const icon = document.createElement("i");
    icon.classList.add("icon__del");
    const btn = document.createElement("button");
    btn.classList.add("choice__btn-del");
    btn.appendChild(icon);
    item.appendChild(btn);

    const name = document.createElement("h4");
    name.classList.add("choice__name");
    name.textContent = value;
    item.appendChild(name);

    return item;
  }

  function removeItem2(event) {
    const item = event.target.closest(".choice__item");
    if (item) {
      item.remove();
    }
  }

  function handleInputKeydown2(event) {
    if (event.keyCode === 13) {
      addItem2();
    }
  }

  const addBtn3 = document.querySelector("#addButton-3");
  const inputChoice3 = document.querySelector(".cid-3");
  const choiceList3 = document.querySelector("#choiceList-3");

  addBtn3.addEventListener("click", addItem3);

  inputChoice3.addEventListener("keydown", handleInputKeydown3);

  const items3 = document.querySelectorAll("#choiceList-3 .choice__item");
  items3.forEach((item) => {
    const btn = item.querySelector(".choice__btn-del");
    btn.addEventListener("click", removeItem3);
  });

  function addItem3() {
    if (inputChoice3.value.trim() === "") {
      return;
    }

    const newItem = createItem(inputChoice3.value);
    choiceList3.appendChild(newItem);

    inputChoice3.value = "";

    const btn = newItem.querySelector(".choice__btn-del");
    btn.addEventListener("click", removeItem3);

    const popup = document.getElementById("popup-choice-3");
    const html = document.querySelector("html");
    popup.classList.remove("popup_show");
    html.classList.remove("popup-show", "lock");
    popup.setAttribute("aria-hidden", "true");
  }

  function createItem(value) {
    const item = document.createElement("li");
    item.classList.add("choice__item");

    const icon = document.createElement("i");
    icon.classList.add("icon__del");
    const btn = document.createElement("button");
    btn.classList.add("choice__btn-del");
    btn.appendChild(icon);
    item.appendChild(btn);

    const name = document.createElement("h4");
    name.classList.add("choice__name");
    name.textContent = value;
    item.appendChild(name);

    return item;
  }

  function removeItem3(event) {
    const item = event.target.closest(".choice__item");
    if (item) {
      item.remove();
    }
  }

  function handleInputKeydown3(event) {
    if (event.keyCode === 13) {
      addItem3();
    }
  }
});
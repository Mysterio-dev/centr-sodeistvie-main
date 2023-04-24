const fileInputList = document.querySelectorAll(".productImage");

fileInputList.forEach(function (fileInput) {
  fileInput.addEventListener("change", function () {
    const file = this.files[0];
    const imagePreview = this.parentNode.querySelector(".form__image-preview");
    const iconWrap = this.parentNode.querySelector(".form__icon-wrap");
    const label = this.parentNode.querySelector("label");
    const deletePhoto = document.createElement("div");

    // Удаление div с классом "form__icon-wrap"
    if (iconWrap) {
      iconWrap.remove();
    }

    // Отображение эскиза фото
    if (file && file.type.match(/^image\//)) {
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        imagePreview.src = reader.result;
      });

      reader.readAsDataURL(file);

      // Добавить div с классом "deletePhoto"
      deletePhoto.classList.add("deletePhoto");
      this.parentNode.appendChild(deletePhoto);

      // Добавить активный класс к label
      label.classList.add("active");
    }

 
  });
});

// Удаление изображения при клике на элемент с классом "deletePhoto"
document.addEventListener("click", function (event) {
  const deletePhoto = event.target.closest(".deletePhoto");

  if (deletePhoto) {
    const formGroup = deletePhoto.parentNode;
    const label = formGroup.querySelector("label");
    const imagePreview = formGroup.querySelector(".form__image-preview");
    const fileInput = formGroup.querySelector(".productImage");
    const iconWrap = document.createElement("div");
    const iconCameraMini = document.createElement("i");

    // Удаление изображения
    fileInput.value = null;
    imagePreview.src = "";

    // Восстановление элемента "icon__camera-mini" внутри элемента "form__icon-wrap"
    iconCameraMini.classList.add("icon__camera-mini");
    iconWrap.classList.add("form__icon-wrap");
    iconWrap.appendChild(iconCameraMini);

    // Восстановление элемента с классом "form__icon-wrap" внутри элемента "label"
    label.appendChild(iconWrap, fileInput);

    // Удаление активного класса у label
    label.classList.remove("active");


    // Удаление элемента "deletePhoto"
    deletePhoto.remove();
  }
});

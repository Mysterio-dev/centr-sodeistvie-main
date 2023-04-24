const photoUpload = document.getElementById("photo-upload");
const formUploadPhoto = document.querySelector(".form-upload__photo");
const formUploadText = document.querySelector(".form-upload__text");

if (photoUpload) {
  photoUpload.addEventListener("change", () => {
    const file = photoUpload.files[0];
    const reader = new FileReader();
    const img = document.createElement("img");

    reader.addEventListener("load", () => {
      img.src = reader.result;
      if (formUploadPhoto) {
        formUploadPhoto.innerHTML = ""; // Очистить контейнер formUploadPhoto
        formUploadPhoto.appendChild(img); // Добавить img в контейнер formUploadPhoto
        formUploadPhoto.classList.add("loaded"); // Добавить класс loaded
      }
    });

    if (file) {
      reader.readAsDataURL(file);
      const fileName = file.name.length > 15 ? file.name.slice(0, 15) + "..." : file.name;
      if (formUploadText) {
        formUploadText.textContent = fileName;
      }
    } else {
      if (formUploadText) {
        formUploadText.textContent = "Загрузить фото";
      }
    }
    
  });
}


const input = document.querySelector("#productImage");
const imagesList = document.querySelector("#prodImages");

// Обрабатываем событие выбора файлов
if (input) {
input.addEventListener("change", (event) => {
  const files = event.target.files;
  if (!files) return;

  // Обходим все выбранные файлы
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Создаем новый элемент списка изображений
    const listItem = document.createElement("li");
    listItem.setAttribute("data-ord", imagesList.children.length + 1);

    // Создаем новый элемент с изображением или эскизом документа
    const label = document.createElement("label");
    label.setAttribute("for", `product_img_${file.name}`);

    const span = document.createElement("span");
    span.classList.add("deleteImage");
    span.setAttribute("data-id", "");
    span.setAttribute("data-ord", imagesList.children.length + 1);

    span.addEventListener("click", () => {
      imagesList.removeChild(listItem);
      input.value = "";
    });

    const div = document.createElement("div");

    // Если выбранный файл является PDF-документом, загружаем его и создаем эскиз
    if (file.type === "application/pdf") {
      // Создаем элемент canvas
      const canvas = document.createElement("canvas");

      // Загружаем PDF-файл
      const fileReader = new FileReader();
      fileReader.onload = function () {
        const typedarray = new Uint8Array(this.result);
        pdfjsLib
          .getDocument({ data: typedarray })
          .promise.then(function (pdf) {
            pdf.getPage(1).then(function (page) {
              const viewport = page.getViewport({ scale: 1 });
              canvas.width = viewport.width;
              canvas.height = viewport.height;

              // Отображаем страницу PDF-файла на элементе canvas
              const context = canvas.getContext("2d");
              const renderContext = {
                canvasContext: context,
                viewport: viewport,
              };
              page.render(renderContext).promise.then(function () {
                // Добавляем стили для canvas
                canvas.style.width = "100%";
                canvas.style.maxWidth = "100%";
                canvas.style.maxHeight = "100%";
                canvas.style.display = "block";
                canvas.style.objectFit = "cover";

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

}

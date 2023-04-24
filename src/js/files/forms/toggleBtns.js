// Получаем все кнопки с классом toggle-btn
const toggleBtns = document.querySelectorAll('.toggle-btn');

// Добавляем обработчик клика на каждую кнопку
toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Проверяем, есть ли у кнопки класс active
    const isActive = btn.classList.contains('active');
    
    if (isActive) {
      // Убираем класс active
      btn.classList.remove('active');
      
      // Удаляем иконку
      const icon = btn.querySelector('.icon__tick-square');
      if (icon) {
        btn.removeChild(icon);
      }
      
      // Меняем текст на кнопке
      const btnText = btn.querySelector('span');
      btnText.textContent = 'Выбрать';
    } else {
      // Добавляем класс active
      btn.classList.add('active');
      
      // Добавляем иконку
      const icon = document.createElement('i');
      icon.classList.add('icon__tick-square');
      btn.appendChild(icon);
      
      // Меняем текст на кнопке
      const btnText = btn.querySelector('span');
      btnText.textContent = 'Выбран';
    }
  });
});

/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
 import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	if (document.querySelector('.hero__slider')) { 
		new Swiper('.hero__slider', { 
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			watchSlidesProgress: true,
			
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},

		});



	

		 
	}



	
	if (document.querySelector('.reviews__slider--one')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews__slider--one', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},

			// Брейкпоинты
			
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 5,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			},
			
		
		});
	}



	if (document.querySelector('.reviews__slider--two')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews__slider--two', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},

			// Брейкпоинты
			
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 5,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			},
			
		
		});
	}

	if (document.querySelector('.reviews__slider--three')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews__slider--three', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},

			// Брейкпоинты
			
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 5,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			},
			
		
		});
	}

	if (document.querySelector('.reviews__slider--four')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews__slider--four', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},

			// Брейкпоинты
			
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 5,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			},
			
		
		});
	}

	if (document.querySelector('.reviews__slider--five')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews__slider--five', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},

			// Брейкпоинты
			
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 5,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			},
			
		
		});
	}

	if (document.querySelector('.partners__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.partners__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			slidesPerView: 1,
			spaceBetween: 10,
			observer: true,
            observeParents: true,
			freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.prev-1',
				nextEl: '.next-1',
			},

			// Брейкпоинты
			
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 5,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 5,
					spaceBetween: 15,
				},
				1268: {
					slidesPerView: 6,
					spaceBetween: 15,
				},
			},
			
		
		});
	}

	if (document.querySelector('.letter__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.letter__slider', { // Указываем скласс нужного слайдера

			modules: [Navigation],
			observer: true,
            observeParents: true,
			freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},

			// Брейкпоинты
			
			breakpoints: {
				0: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				575: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 25,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 25,
				},
			},
			
		
		});
	}


	if (document.querySelector('.documents__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.documents__slider', { // Указываем скласс нужного слайдера

			modules: [Navigation],
			observer: true,
            observeParents: true,
			freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.prev-2',
				nextEl: '.next-2',
			},

			// Брейкпоинты
			
			breakpoints: {
				0: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				575: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 25,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 25,
				},
			},
			
		
		});
	}

	if (document.querySelector('.staff__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.staff__slider', { // Указываем скласс нужного слайдера

			modules: [Navigation],
			observer: true,
            observeParents: true,
			freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.prev-3',
				nextEl: '.next-3',
			},

			// Брейкпоинты
			
			breakpoints: {
				0: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				575: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 25,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 25,
				},
			},
			
		
		});
	}



	if (document.querySelector('.article__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.article__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 15,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},

			pagination: {
				el: '.article__pagination',
				clickable: true,
			},

		
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
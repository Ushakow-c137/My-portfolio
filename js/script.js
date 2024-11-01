'use strict';

const slides = document.querySelectorAll('.slider__slide');
for (let slide of slides) {
  slide.addEventListener('click', function (event) {
    slide.classList.toggle('_active')
  });
}

// slider

const worksSlider = new Swiper(".main__slider", {
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    type: "fraction",

    // renderFraction: function (currentClass, totalClass) {
    //   return '<span class="' + currentClass + '"></span>' + 
    //   '/' + '<span class="' + totalClass + '"></span>' + ' People'
    // },
  },

  // mousewheel: {

  // },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  loop: true,

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 30,
    },
    620: {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },

  preloadImages: false,
  lazy: {
    loadOnTtansitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

})





// ? ------- Lazy loading картинок --------------

const lazyImages = document.querySelectorAll("img[data-src],source[data-srcset]");
const loadMapBlock = document.querySelector('._load-map');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
  lazyImages.forEach(img => {
    if (img.dataset.src || img.dataset.srcset) {
      lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset); 
      lazyScrollCheck()
          // Вставка положения каждого изображения
    }
  });
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
	// Просто вызвает другую функцию для проверки условия и добавленя путей к изображениям
  if (document.querySelectorAll("img[data-src],source[data-srcset]").length > 0) {
    lazyScrollCheck()
  }

};

// Проверяет, доскролил ли пользователь до ...
function lazyScrollCheck() { 
  let imgIndex = lazyImagesPositions.findIndex(
    item => pageYOffset > item - windowHeight
  );
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute('data-src');
    } else if (lazyImages[imgIndex].dataset.srcset) {
      lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
      lazyImages[imgIndex].removeAttribute('data-srcset');
    }
    delete lazyImagesPositions[imgIndex]; 
  }
}




// Плавная прокрутка

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

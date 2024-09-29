"use strict"; 

const page = document.body; 
const width = page.clientWidth; 

function clientWidth() { 
  if (width >= 1500) { 
    return 76; 
  } else { 
    return 20; 
  } 
}

function slidesPerView() { 
  const width = page.clientWidth; 

  if (width < 651) { 
    return 4; 
  } else { 
    return 2; 
  } 
} 

console.log(width); 

const slider = new Swiper(".slider", { 
  loop: true, 

  pagination: { 
    el: '.swiper-pagination', 
    clickable: true, 
    // dynamicBullets: true,
  }, 

  navigation: { 
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev', 
  }, 

  scrollbar: { 
    el: '.swiper-scrollbar', 
  }, 

  mousewheel: {}, 

  slidesPerView: 2, 
  // slidesPerGroup: 2,

  breakpoints: { 
    650: { 
      spaceBetween: clientWidth(), 
      slidesPerView: slidesPerView(),
      
    },
    // 320: {
    //   spaceBetween: 0,
    //   slidesPerGroup: 1,
    // } 
  }, 

  autoHeight: false, 
  // slidesPerColumn: 2, 
});

window.addEventListener('resize', () => {
  swiper.update();
});




// -------------------------- цветовая тема ------------------

let styleMode = localStorage.getItem("styleMode");

const styleToggle = document.querySelector('.header__switch');
console.log(styleToggle);

const enableDarkStyle = () => {
  document.body.classList.add("light");
  localStorage.setItem('styleMode', 'dark');
};

const disableDarkStyle = () => {
  document.body.classList.remove("light");
  localStorage.setItem('styleMode', null);
};

styleToggle.addEventListener('click', () => {
  let styleMode = localStorage.getItem("styleMode");
  if (styleMode !== 'dark') {
    enableDarkStyle();
  } else {
    disableDarkStyle();
  }
});

if (styleMode === 'dark') {
  enableDarkStyle();
}


// -------------- burger king -------------------

const burger = document.querySelector('.header__burger');
const wrapper = document.querySelector('.wrapper');
burger.addEventListener('click', function () {
  console.log('ass')
  burger.classList.toggle('_active');
  wrapper.classList.toggle('_active');
});


// ------------- вылетающее Window -------------------

const windowCall = document.querySelector('#has-window');
const windowEL = document.querySelector('#has-window .window');
windowCall.addEventListener('click', () => {
  windowEL.classList.toggle("_active")
})
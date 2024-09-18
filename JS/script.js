"use strict";

const pade = document.body
const width = pade.clientWidth;
let clientWidth = function () {
  if (width >= 1500) {
    return 76;
  } else {
    return 20
  }
};


const slider = new Swiper(".slider", {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  mousewheel: {

  },

  slidesPerView: 2,
  spaceBetween: clientWidth(),

});

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
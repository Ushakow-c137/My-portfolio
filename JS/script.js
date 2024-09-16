"use strict";

const slider = new Swiper(".slider__container", {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
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
  spaceBetween: 40,

});


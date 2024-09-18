"use strict";

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
  spaceBetween: 76,

});


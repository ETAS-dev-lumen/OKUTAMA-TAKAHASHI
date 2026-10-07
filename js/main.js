'use strict';
feather.replace();

const swiper = new Swiper('.p-hero', {

  loop: true,
  speed: 800,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 25,
      centeredSlides: true,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const categories = document.querySelectorAll(".p-shopNews__category");
categories.forEach(function (category) {
  category.addEventListener("click", function () {

    categories.forEach(function (item) {
      item.classList.remove("is-active");
    });

    category.classList.add("is-active");
  });
});


const swiper2 = new Swiper('.p-trend__swiper', {
  loop: true,
  spaceBetween: 40,
  speed: 10000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 'auto',
});


document.querySelectorAll('.c-tab__area').forEach(tabArea => {

  const buttons = tabArea.querySelectorAll('.c-tab__button');
  const contents = tabArea.querySelectorAll('.c-tab__content');

  buttons.forEach(button => {

    button.addEventListener('click', () => {

      buttons.forEach(btn => btn.classList.remove('is-active'));
      contents.forEach(content => {
        content.classList.remove('is-active');
      });

      button.classList.add('is-active');

      const target = button.dataset.tab;
      tabArea.querySelector('#' + target)
        .classList.add('is-active');
    });
  });
});

const stickyHeader = document.querySelector('.p-header__show');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    stickyHeader.classList.add('is-show');
  } else {
    stickyHeader.classList.remove('is-show');
  }
});
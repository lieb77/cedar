// components/swiper-carousel/_swiper-carousel.js

import Swiper from 'swiper/bundle';

// Initialize Swiper after Drupal behaviors are attached
(function (Drupal, once) {
  Drupal.behaviors.swiperCarousel = {
    attach: function (context, settings) {
      once('swiper-carousel', '.mySwiper', context).forEach(function (element) {
        new Swiper(element, {
          // Optional parameters
          direction: 'horizontal',
          loop: true,

          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
          },

          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      });
    }
  };
})(Drupal, once);

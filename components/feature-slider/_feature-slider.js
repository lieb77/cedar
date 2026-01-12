// components/swiper-carousel/_swiper-carousel.js

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

(function (Drupal, once) {
  Drupal.behaviors.featureSlider = {
    attach: function (context, settings) {
      // Use 'once' to ensure Swiper is only initialized once per element.
      // The 'feature-slider-init' is a unique ID for this instance.
      const elements = once('feature-slider-init', '.feature-slider', context);

      elements.forEach((slider) => {
        // We initialize Swiper and scope selectors to this specific slider instance
        const swiperInstance = new Swiper(slider, {
          loop: true,
		  slidesPerView: 1,
		  observer: true, 
		  observeParents: true,
		  centeredSlides: true,

		  // Enable Autoplay
		  autoplay: {
			delay: 5000, // 5 seconds
			disableOnInteraction: false,
		  },
		  
          // Pagination settings
          pagination: {
            el: slider.querySelector('.swiper-pagination'),
            clickable: true,
          },

          // Navigation settings
          navigation: {
            nextEl: slider.querySelector('.swiper-button-next'),
            prevEl: slider.querySelector('.swiper-button-prev'),
          },

          // Optional: accessible focus management
          a11y: {
            prevSlideMessage: Drupal.t('Previous slide'),
            nextSlideMessage: Drupal.t('Next slide'),
          },          		 
          
        });
      });
    }
  };
})(Drupal, once);
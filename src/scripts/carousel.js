import Swiper , { Navigation, Pagination } from 'swiper';

const swiper = document.querySelector('.swiper');

const carousel =  () => {


    new Swiper(swiper, {
      modules: [Navigation],
      slidesPerView: 1,
      speed: 1200,
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      breakpoints: {
        960: {
          slidesPerView: 2,
        },
      }
    });

}

export default carousel;

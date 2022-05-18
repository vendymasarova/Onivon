import Swiper , { Navigation, Pagination } from 'swiper';

const swiper = document.querySelector('.swiper');

const carousel =  () => {


    new Swiper(swiper, {
      modules: [Navigation],
      slidesPerView: 2,
      speed: 1200,
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });

}

export default carousel;

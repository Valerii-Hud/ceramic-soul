//——————~ SWIPER LIB ~——————//
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//——————~ MY STYLES ~——————//
import '../sass/style.scss';

//——————~ WORKS SWIPER CFG ~——————//
try {
  new Swiper('.works__slider', {
    modules: [Navigation, Pagination],
    allowSlideNext: true,
    allowSlidePrev: true,
    allowTouchMove: true,
    parallax: true,
    keyboard: true,
    mousewheel: true,
    loop: true,
    zoom: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      1920: {
        spaceBetween: 35,
      },
    },
  });
} catch (e) {
  console.log(e);
}

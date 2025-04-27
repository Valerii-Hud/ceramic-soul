//——————~ SWIPER LIB ~——————//
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//——————~ MY STYLES ~——————//
import "/src/sass/style.scss";

//——————~ WORKS SWIPER CFG ~——————//
try {
  new Swiper(".works__slider", {
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
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
        navigation: {
          nextEl: ".icon-right-open",
          prevEl: ".icon-left-open",
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

//——————~ MENU & BURGER ~——————//
const burger = document.querySelector(".burger");
const close = document.querySelector(".header__menu-close");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.add("header__menu_active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menu.classList.remove("header__menu_active");
  document.body.style.overflow = "";
});

//——————~ CATALOG TABS ~——————//
try {
  const tabs = document.querySelectorAll(".catalog__tab");
  const contents = document.querySelectorAll(".catalog__content-item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
      contents.forEach((c) => (c.style.display = "none"));
      tab.classList.add("catalog__tab_active");
      contents[index].style.display = "block";
    });
  });
} catch (e) {
  console.error(e);
}

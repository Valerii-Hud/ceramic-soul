//——————~ SWIPER LIB ~——————//
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import JustValidate from 'just-validate';

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
          nextEl: '.icon-right-open',
          prevEl: '.icon-left-open',
        },
      },
      1920: {
        spaceBetween: 35,
      },
    },
  });
} catch (e) {
  console.error(e);
}

//——————~ MENU & BURGER ~——————//
const burger = document.querySelector('.burger');
const close = document.querySelector('.header__menu-close');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  menu.classList.add('header__menu_active');
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
  menu.classList.remove('header__menu_active');
  document.body.style.overflow = '';
});

//——————~ CATALOG TABS ~——————//
try {
  const tabs = document.querySelectorAll('.catalog__tab');
  const contents = document.querySelectorAll('.catalog__content-item');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('catalog__tab_active'));
      contents.forEach((c) => (c.style.display = 'none'));
      tab.classList.add('catalog__tab_active');
      contents[index].style.display = 'grid';
    });
  });
} catch (e) {
  console.error(e);
}

try {
  const emailEl = document
    .querySelector('#question')
    .parentElement.querySelector('.error-message');
  const validator = new JustValidate('form');
  const checkboxEl = document
    .querySelector('#checkbox')
    .parentElement.parentElement.querySelector('.checkbox-error-message');
  validator
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'This field is required.',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Please enter a name that is longer than 2 characters.',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'This field is required.',
      },
      {
        rule: 'email',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Please enter an email that is longer than 3 characters.',
      },
    ])
    .addField(
      '#question',
      [
        {
          rule: 'required',
          errorMessage: 'This field is required.',
        },
        {
          rule: 'minLength',
          value: 5,
          errorMessage:
            'Please enter a question that is longer than 5 characters.',
        },
      ],

      {
        errorsContainer: emailEl,
      }
    )
    .addField(
      '#checkbox',
      [
        {
          rule: 'required',
          errorMessage: 'Please accept the privacy policy',
        },
      ],

      {
        errorsContainer: checkboxEl,
      }
    );
} catch (e) {
  console.error(e);
}

try {
  const emailEl = document
    .querySelector('#formEmail')
    .parentElement.querySelector('.error-message');
  const footer_checkbox = document
    .querySelector('#footer__checkbox')
    .parentElement.parentElement.querySelector('.checkbox-error-message');
  const footerValidator = new JustValidate('.footer__form');
  footerValidator
    .addField(
      '#formEmail',
      [
        {
          rule: 'required',
          errorMessage: 'This field is required.',
        },
        {
          rule: 'email',
        },
        {
          rule: 'minLength',
          value: 3,
          errorMessage:
            'Please enter an email that is longer than 3 characters.',
        },
      ],
      {
        errorsContainer: emailEl,
      }
    )
    .addField(
      '#footer__checkbox',
      [
        {
          rule: 'required',
          errorMessage: 'Please accept the privacy policy',
        },
      ],

      {
        errorsContainer: footer_checkbox,
      }
    );
} catch (e) {
  console.error(e);
}

//——————~ MY STYLES ~——————//
import '/src/sass/style.scss';

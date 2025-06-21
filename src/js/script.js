'use strict';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import JustValidate from 'just-validate';

import {
  CATALOG_PAGE,
  ABOUT_PAGE,
  BLOG_PAGE,
  HOME_PAGE,
  ADMIN_PAGE,
} from './pages';
import { blogCard } from './components/Blog';
import { currentUser } from './profiles';
document.addEventListener('DOMContentLoaded', () => {
  function swiperConfiguration() {
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
  }

  function toggleMenu() {
    try {
      const burger = document.querySelector('.burger'),
        menu = document.querySelector('.header__menu'),
        close = menu.querySelector('.header__menu-close');

      burger.addEventListener('click', () => {
        menu.classList.add('header__menu_active');
        document.body.style.overflow = 'hidden';
      });

      close.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
        document.body.style.overflow = '';
      });
    } catch (e) {
      console.error(e);
    }
  }

  function initializeTabs() {
    try {
      const tabs = document.querySelectorAll('.catalog__tab'),
        contents = document.querySelectorAll('.catalog__content-item');

      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          tabs.forEach((tab) => tab.classList.remove('catalog__tab_active'));
          contents.forEach((content) => (content.style.display = 'none'));
          tab.classList.add('catalog__tab_active');
          contents[index].style.display = 'grid';
        });
      });
    } catch (e) {
      console.error(e);
    }
  }

  function validateEmail() {
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
            errorMessage:
              'Please enter a name that is longer than 2 characters.',
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
            errorMessage:
              'Please enter an email that is longer than 3 characters.',
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
        )
        .onSuccess((e) => {
          const form = e.currentTarget;
          const formData = new FormData(form);

          fetch('https://httpbin.org/post', {
            method: 'POST',
            body: formData,
          })
            .then((res) => res.json())
            .then((data) => {
              console.log('Success', data);
              form.reset();
            });
        });
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
  }

  function createPage(page) {
    function createElement(elem) {
      document.body.insertAdjacentHTML('beforeend', elem.trim());
    }
    for (let section of page) {
      createElement(section);
    }
  }

  function switchPage() {
    switchPageContent('[data-page="home"]', HOME_PAGE);
    switchPageContent('[data-page="blog"]', BLOG_PAGE);
    switchPageContent('[data-page="catalog"]', CATALOG_PAGE);
    switchPageContent('[data-page="about"]', ABOUT_PAGE);
  }

  function switchPageContent(data, page) {
    document.querySelectorAll(data).forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.innerHTML = '';
        createPage(page);
        main();
      });
    });
  }

  function blogCards() {
    if (document.querySelector('.blog')) {
      const cardsParent = document.querySelector('.blog__wrapper');

      function createBlogData(img, title, descr) {
        cardsParent.innerHTML += ` <div class="blog__card"><div class="blog__data pure-g">
          <div class="pure-u-1 pure-u-md-1-2">
            <img class="blog__img" src="${img}" alt="tea" />
          </div>
          <div class="pure-u-1 pure-u-md-1-2 blog__data-column">
            <h3 class="title__h3 blog__title-h3">${title}</h3>
            <button class="btn__read">Read</button>
          </div>
          <div class="blog__descr">${descr}</div>
        </div></div>`;
      }

      for (let i = 0; i <= blogCard.titles.length - 1; i++) {
        createBlogData(
          blogCard.images[i],
          blogCard.titles[i],
          blogCard.descriptions[i]
        );
      }
    }
  }

  function dynamicBlogAppend() {
    let newBlogCard = {
      title: undefined,
      img: undefined,
      description: undefined,
    };

    try {
      const newBlogForm = document.querySelector('.admin__inputs'),
        newBlogTitle = newBlogForm.querySelector('#blogTitle'),
        newBlogImg = newBlogForm.querySelector('#blogImgLink'),
        newBlogDescription = newBlogForm.querySelector('#blogDescription');
      newBlogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        newBlogCard.title = newBlogTitle.value.trim();
        newBlogCard.img = newBlogImg.value.trim();
        newBlogCard.description = newBlogDescription.value.trim();
        console.log(newBlogCard);
        function cardAppend() {
          if (newBlogCard.description && newBlogCard.img && newBlogCard.title) {
            blogCard.images.push(newBlogImg.value.trim());
            blogCard.titles.push(newBlogTitle.value.trim());
            blogCard.descriptions.push(newBlogDescription.value.trim());
            console.log(blogCard);
            document.body.innerHTML = '';
            createPage(BLOG_PAGE);
            // blogCard();
            main();
          }
        }
        cardAppend();
      });
    } catch (e) {
      console.error(e);
    }
  }

  function createAdminPanelBtn(person) {
    const linksParent = document.querySelector('.header__nav > ul');

    if (person && person.isAdmin) {
      const li = document.createElement('li'),
        a = document.createElement('a');

      a.href = '#';
      a.className = 'header__menu-link';
      a.dataset.page = 'admin';
      a.textContent = 'Admin ';
      li.appendChild(a);
      linksParent.appendChild(li);
    }
  }
  function main() {
    switchPage();
    swiperConfiguration();
    toggleMenu();
    initializeTabs();
    validateEmail();
    blogCards();
    dynamicBlogAppend();
    createAdminPanelBtn(currentUser);
    switchPageContent('[data-page="admin"]', ADMIN_PAGE);
  }

  createPage(HOME_PAGE);
  main();
});

import '/src/sass/style.scss';

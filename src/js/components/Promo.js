'use strict';

export const promoSection = ` <section class="promo">
      <img src="/src/img/promo/potter.jpg" alt="potter" class="promo__potter" />
      <div class="container">
        <header class="header">
          <div class="header__menu">
            <div class="header__menu-close">
              <span></span>
              <span></span>
            </div>
            <nav class="header__menu-nav">
              <ul>
                <li>
                  <a href="#" class="header__menu-link" data-page="home">Home</a>
                </li>
                <li>
                  <a href="#" class="header__menu-link" data-page="blog">Blog</a>
                </li>
                <li>
                  <a href="#" class="header__menu-link" data-page="catalog"
                    >Catalog</a
                  >
                </li>
                <li>
                  <a href="#" class="header__menu-link" data-page="about">About</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="header__top">
            <div class="burger"><span></span><span></span><span></span></div>
            <a href="#" class="header__logo"
              ><img src="/src/logo/logo.png" alt="logo"
            /></a>
            <div class="header__icons">
              <a href="#"><span class="icon-search"></span></a>
              <a href="#"><span class="icon-shopping-bag"></span></a>
            </div>
          </div>
          <nav class="header__nav">
            <ul>
              <li>
                <a href="#" class="header__menu-link" data-page="home">Home</a>
              </li>
              <li>
                <a href="#" class="header__menu-link" data-page="blog">Blog</a>
              </li>
              <li>
                <a href="#" class="header__menu-link" data-page="catalog">Catalog</a>
              </li>
              <li>
                <a href="#" class="header__menu-link" data-page="about">About</a>
              </li>
            </ul>
          </nav>
        </header>
        <div class="promo__wrapper">
          <h1 class="title__h1-italic promo__title">
            Make your dream come true<br />or decorate your home
          </h1>
          <div class="promo__cta">
            <img
              src="/src/img/promo/ceramic-vase.jpg"
              alt="vase"
              class="promo__img"
            />
            <button class="btn__primary promo__btn">Shop now</button>
          </div>
        </div>
      </div>
    </section>`;

'use strict';

export const blogCard = {
  images: [
    '../src/img/works/tea-1.jpg',
    '../src/img/form/tea.jpg',
    '../src/img/works/tea-1.jpg',
  ],
  titles: [
    'Pottery secrets',
    'The best materials for pottery',
    'Pottery secrets',
  ],
  descriptions: [
    ` Discover the timeless art of pottery and unlock the secrets hidden
              in every curve and glaze. From mastering the perfect wheel
              technique to understanding how clay transforms in the kiln, each
              step reveals a blend of tradition and creativity. The true magic
              lies in the details—subtle textures, natural imperfections, and
              the unique touch of the artisan’s hand, turning simple earth into
              lasting beauty.`,
    `The best material for pottery often depends on the desired look
              and function, but stoneware is a favorite for its durability and
              versatility. It’s strong, resistant to chipping, and perfect for
              both functional pieces like mugs and plates, as well as decorative
              art. Porcelain offers a delicate, refined finish, ideal for
              intricate designs`,
    `Discover the timeless art of pottery and unlock the secrets hidden
              in every curve and glaze. From mastering the perfect wheel
              technique to understanding how clay transforms in the kiln, each
              step reveals a blend of tradition and creativity. The true magic
              lies in the details—subtle textures, natural imperfections, and
              the unique touch of the artisan’s hand, turning simple earth into
              lasting beauty.`,
  ],
};

export const blogSection = `<section class="blog">
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
            <a href="#" class="header__menu-link" data-page="catalog"
              >Catalog</a
            >
          </li>
          <li>
            <a href="#" class="header__menu-link" data-page="about">About</a>
          </li>
        </ul>
      </nav>
    </header>
    <h1 class="title__h2 blog__title">Our digital notes</h1>
    <div class="blog__wrapper"></div>
  </div>
</section>  `;

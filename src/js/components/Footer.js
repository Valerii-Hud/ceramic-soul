'use strict';

export const footerSection = `    <footer class="footer footer_spaced">
      <div class="container">
        <div class="footer__wrapper">
          <div class="footer__newsletter">
            <h2 class="footer__header">newsletter</h2>
            <div class="footer__text footer__text_spaced">
              Keep up to date with news and promotions
            </div>
            <form action="#" class="footer__form">
              <input
                name="formEmail"
                id="formEmail"
                placeholder="Enter your e-mail"
                type="email"
                class="footer__input"
                required
              />
              <div class="error-message"></div>
              <label class="footer__check-block" for="footer__checkbox">
                <input
                  required
                  class="footer__checkbox"
                  type="checkbox"
                  id="footer__checkbox"
                />
                I agree with the <a href="#">terms</a></label
              >
              <div class="checkbox-error-message"></div>

              <button class="btn-submit footer__form-btn">submit</button>
            </form>
          </div>
          <div class="footer__links">
            <div class="footer__links-block">
              <h2 class="footer__header">discover</h2>
              <nav class="footer__nav">
                <ul>
                  <li class="footer__link"><a href="#">About Us</a></li>
                  <li class="footer__link"><a href="#">Blog</a></li>
                </ul>
              </nav>
            </div>
            <div class="footer__links-block">
              <h2 class="footer__header">shopping</h2>
              <nav class="footer__nav">
                <ul>
                  <li class="footer__link"><a href="#">Catalog</a></li>
                </ul>
              </nav>
            </div>
            <div class="footer__links-block">
              <h2 class="footer__header">information</h2>
              <nav class="footer__nav">
                <ul>
                  <li class="footer__link">
                    <a href="#">Terms and Conditions</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="footer__social">
            <h2 class="footer__header">follow us</h2>
            <ul class="footer__social-block">
              <li>
                <a href="https://www.facebook.com/">
                  <span class="icon-facebook"></span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <span class="icon-instagram"></span>
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <span class="icon-pinterest-circled"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__copyright">© Copyright 2025, Ceramic soul</div>
      </div>
    </footer>`;

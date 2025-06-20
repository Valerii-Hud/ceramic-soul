'use strict';

export const gitSection = `<section class="git">
  <div class="container">
    <h2 class="git__title title__h2">Get in touch</h2>
    <div class="git__wrapper pure-g">
      <div class="git__item git__item-img pure-u-1 pure-u-xl-11-24 pure-u-xxl-1-2">
        <img
          src="/src/img/form/tea.jpg"
          alt="tea"
          class="git__item-img_content"
        />
      </div>
      <div class="git__item git__item-form pure-u-1 pure-u-xl-11-24 pure-u-xxl-2-5">
        <form action="#" class="git__item-form_content">
          <fieldset class="git__fieldset">
            <div class="git__input-block">
              <label class="git__label" for="name">
                Name
              </label>
              <input
                required
                class="git__input"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div class="git__input-block">
              <label class="git__label" for="email">
                Email
              </label>
              <input
                required
                class="git__input"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
          </fieldset>
          <label class="git__label" for="question">
            Your question
          </label>
          <textarea
            required
            class="git__textarea"
            name="question"
            id="question"
            placeholder="Question"
          ></textarea>
          <div class="error-message"></div>
          <label class="git__label git__check-block" for="checkbox">
            <input
              required
              class="git__checkbox"
              type="checkbox"
              id="checkbox"
              name="checkbox"
            />
            I agree with the
            <a href="terms" class="git__terms">
              terms
            </a>
          </label>
          <div class="checkbox-error-message"></div>

          <button class="btn btn__send git__btn">Send request</button>
          <img src="/src/img/form/vase.png" alt="vase" class="git__img" />
        </form>
      </div>
    </div>
  </div>
</section>;
`;

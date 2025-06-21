export const adminPanelSection = `    <section class="admin">
      <div class="container">
        <form class="admin__inputs">
          <input
            type="text"
            id="blogTitle"
            placeholder="Title"
            class="admin__input"
          />
          <input
            type="text"
            id="blogImgLink"
            placeholder="Image link"
            class="admin__input"
          />
          <textarea
            id="blogDescription"
            value="Description"
            class="admin__input admin__input_description"
          >
          </textarea>
          <button class="btn admin__btn" type="submit">Create new card</button>
        </form>
      </div>
    </section>`;

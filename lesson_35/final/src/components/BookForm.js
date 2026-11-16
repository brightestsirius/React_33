import { MAX_RATING } from "@/constants.js";
import { renderOptions, toOptions } from "@/utils/dom.js";

const FIELDS = [`title`, `author`, `year`, `genre`, `rating`];
const TITLE_CREATE = `Нова книга`;
const TITLE_EDIT = `Редагування книги`;

// [5, 4, 3, 2, 1]
const RATINGS = Array.from({ length: MAX_RATING }, (_, index) => MAX_RATING - index);

export class BookForm {
  constructor(form, genres, { onSubmit }) {
    this.form = form;
    this.onSubmit = onSubmit;
    this.editId = null;

    this.heading = form.querySelector(`.form__title`);
    this.btnSubmit = form.querySelector(`[type="submit"]`);
    this.btnCancel = form.querySelector(`[data-action="cancel"]`);

    renderOptions(form.elements.genre, toOptions(genres));
    renderOptions(form.elements.rating, toOptions(RATINGS));

    form.addEventListener(`submit`, (event) => this.handleSubmit(event));
    this.btnCancel.addEventListener(`click`, () => this.reset());
  }

  getData() {
    const { title, author, year, genre, rating } = this.form.elements;

    return {
      title: title.value.trim(),
      author: author.value.trim(),
      year: Number(year.value),
      genre: genre.value,
      rating: Number(rating.value),
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.btnSubmit.disabled = true;

    const isSaved = await this.onSubmit(this.getData(), this.editId);
    if (isSaved) this.reset();

    this.btnSubmit.disabled = false;
  }

  fill(book) {
    const { elements } = this.form;
    FIELDS.forEach((key) => {
      elements[key].value = book[key];
    });

    this.editId = book.id;
    this.heading.textContent = TITLE_EDIT;
    this.btnCancel.hidden = false;
    this.form.scrollIntoView({ behavior: `smooth` });
    elements.title.focus({ preventScroll: true });
  }

  reset() {
    this.form.reset();
    this.editId = null;
    this.heading.textContent = TITLE_CREATE;
    this.btnCancel.hidden = true;
  }
}

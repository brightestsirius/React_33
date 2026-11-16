// Webpack перетворює імпорт картинки на URL готового файлу в dist
import cover from "@assets/images/book-cover.svg";
import { MAX_RATING } from "@/constants.js";
import { createElement } from "@/utils/dom.js";

export class BookCard {
  constructor(book, { onEdit, onDelete }) {
    this.book = book;
    this.onEdit = onEdit;
    this.onDelete = onDelete;
  }

  renderRating() {
    const { rating } = this.book;
    const stars = `★`.repeat(rating) + `☆`.repeat(MAX_RATING - rating);
    const element = createElement(`p`, `card__rating`, stars);
    element.title = `Рейтинг ${rating} з ${MAX_RATING}`;
    return element;
  }

  renderActions() {
    const actions = createElement(`div`, `card__actions`);
    const btnEdit = createElement(`button`, `btn btn--small btn--ghost`, `Редагувати`);
    const btnDelete = createElement(`button`, `btn btn--small btn--danger`, `Видалити`);
    btnEdit.type = `button`;
    btnDelete.type = `button`;

    btnEdit.addEventListener(`click`, () => this.onEdit(this.book));
    btnDelete.addEventListener(`click`, () => this.onDelete(this.book));

    actions.append(btnEdit, btnDelete);
    return actions;
  }

  render() {
    const { title, author, year, genre } = this.book;

    const li = createElement(`li`, `books__item`);
    const article = createElement(`article`, `card`);

    const img = createElement(`img`, `card__cover`);
    img.src = cover;
    img.alt = ``;
    img.width = 90;
    img.height = 120;

    const body = createElement(`div`, `card__body`);
    body.append(
      createElement(`span`, `card__genre`, genre),
      createElement(`h3`, `card__title`, title),
      createElement(`p`, `card__author`, `${author}, ${year}`),
      this.renderRating(),
    );

    article.append(img, body, this.renderActions());
    li.append(article);
    return li;
  }
}

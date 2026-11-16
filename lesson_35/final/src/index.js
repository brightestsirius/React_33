// Стилі імпортуються в JS — webpack пропускає їх через лоадери,
// а MiniCssExtractPlugin виносить в окремий .css файл
import "normalize.css";
import "@/scss/main.scss";

import { genres } from "@/data/genres.js";
import { ALL_GENRES, NOTICE_TYPE, SORT_BY, SORT_OPTIONS } from "@/constants.js";
import { service } from "@/api/service.js";
import { BookCard } from "@/components/BookCard.js";
import { BookForm } from "@/components/BookForm.js";
import { Notice } from "@/components/Notice.js";
import { createElement, renderOptions, toOptions } from "@/utils/dom.js";
import { filterBooks, sortBooks } from "@/utils/filters.js";

const state = {
  books: [],
  search: ``,
  genre: ALL_GENRES,
  sort: SORT_BY.TITLE,
};

const booksList = document.querySelector(`#booksList`);
const booksCount = document.querySelector(`#booksCount`);
const searchInput = document.querySelector(`#search`);
const genreSelect = document.querySelector(`#genreFilter`);
const sortSelect = document.querySelector(`#sort`);
const btnStats = document.querySelector(`#btnStats`);
const statsModal = document.querySelector(`#statsModal`);

const notice = new Notice(document.querySelector(`#notice`));

const renderBooks = () => {
  const books = sortBooks(filterBooks(state.books, state), state.sort);

  booksList.innerHTML = ``;
  booksCount.textContent = `(${books.length})`;

  if (!books.length) {
    booksList.append(createElement(`li`, `books__empty`, `Нічого не знайдено`));
    return;
  }

  books.forEach((book) => {
    const card = new BookCard(book, { onEdit: editBook, onDelete: deleteBook });
    booksList.append(card.render());
  });
};

const saveBook = async (data, id) => {
  try {
    if (id) {
      const updated = await service.put(id, data);
      state.books = state.books.map((book) => (book.id === id ? updated : book));
      notice.show(`Книгу «${updated.title}» оновлено`);
    } else {
      const created = await service.post(data);
      state.books = [...state.books, created];
      notice.show(`Книгу «${created.title}» додано`);
    }

    renderBooks();
    return true;
  } catch (error) {
    notice.show(`Не вдалося зберегти: ${error.message}`, NOTICE_TYPE.ERROR);
    return false;
  }
};

const form = new BookForm(document.querySelector(`#bookForm`), genres, { onSubmit: saveBook });

function editBook(book) {
  form.fill(book);
}

async function deleteBook(book) {
  if (!confirm(`Видалити «${book.title}»?`)) return;

  try {
    await service.delete(book.id);
    state.books = state.books.filter((item) => item.id !== book.id);
    if (form.editId === book.id) form.reset();
    renderBooks();
    notice.show(`Книгу «${book.title}» видалено`);
  } catch (error) {
    notice.show(`Не вдалося видалити: ${error.message}`, NOTICE_TYPE.ERROR);
  }
}

const loadBooks = async () => {
  try {
    state.books = await service.get();
    renderBooks();
  } catch (error) {
    booksList.innerHTML = ``;
    booksList.append(createElement(`li`, `books__empty`, `Не вдалося завантажити книги`));
    notice.show(`Помилка завантаження: ${error.message}`, NOTICE_TYPE.ERROR);
  }
};

searchInput.addEventListener(`input`, () => {
  state.search = searchInput.value;
  renderBooks();
});

genreSelect.addEventListener(`change`, () => {
  state.genre = genreSelect.value;
  renderBooks();
});

sortSelect.addEventListener(`change`, () => {
  state.sort = sortSelect.value;
  renderBooks();
});

// Dynamic import: webpack виносить stats.js (разом з модалкою Bootstrap і її стилями)
// в окремі чанки, які браузер завантажить лише після першого кліку — дивіться вкладку Network
btnStats.addEventListener(`click`, async () => {
  const { showStats } = await import(/* webpackChunkName: "stats" */ `@/modules/stats.js`);
  showStats(statsModal, state.books);
});

renderOptions(genreSelect, [{ value: ALL_GENRES, label: `Усі жанри` }, ...toOptions(genres)]);
renderOptions(sortSelect, SORT_OPTIONS);
loadBooks();

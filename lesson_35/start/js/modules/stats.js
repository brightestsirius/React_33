// Bootstrap підключений повністю через CDN у index.html і доступний як глобальна змінна bootstrap
// (import ... from "bootstrap" без webpack у браузері не працює)
import { createElement } from "../utils/dom.js";

const { Modal } = window.bootstrap;

const countByGenre = (books) =>
  books.reduce((acc, { genre }) => {
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {});

const getAverageRating = (books) => books.reduce((sum, { rating }) => sum + rating, 0) / books.length;

const renderSummaryItem = (label, value) => {
  const item = createElement(`div`, `stats__item`);
  item.append(createElement(`dt`, `stats__label`, label), createElement(`dd`, `stats__value`, value));
  return item;
};

const renderGenres = (books) => {
  const list = createElement(`ul`, `stats__genres`);
  const genres = Object.entries(countByGenre(books)).sort((a, b) => b[1] - a[1]);

  genres.forEach(([genre, count]) => {
    const li = createElement(`li`, `stats__genre`);
    const bar = createElement(`span`, `stats__bar`);
    bar.style.setProperty(`--percent`, `${(count / books.length) * 100}%`);

    li.append(createElement(`span`, `stats__genre-name`, genre), bar, createElement(`span`, `stats__count`, count));
    list.append(li);
  });

  return list;
};

const renderContent = (container, books) => {
  container.innerHTML = ``;

  if (!books.length) {
    container.append(createElement(`p`, `stats__empty`, `Книг поки немає`));
    return;
  }

  const byYear = [...books].sort((a, b) => a.year - b.year);
  const oldest = byYear[0];
  const newest = byYear[byYear.length - 1];

  const summary = createElement(`dl`, `stats__summary`);
  summary.append(
    renderSummaryItem(`Усього книг`, books.length),
    renderSummaryItem(`Середній рейтинг`, getAverageRating(books).toFixed(1)),
    renderSummaryItem(`Найстаріша`, `${oldest.title} (${oldest.year})`),
    renderSummaryItem(`Найновіша`, `${newest.title} (${newest.year})`),
  );

  container.append(summary, renderGenres(books));
};

export const showStats = (modalElement, books) => {
  renderContent(modalElement.querySelector(`.stats`), books);
  Modal.getOrCreateInstance(modalElement).show();
};

import { ALL_GENRES, SORT_BY, SORT_LOCALE } from "@/constants.js";

export const filterBooks = (books, { search, genre }) => {
  const query = search.trim().toLowerCase();

  return books.filter((book) => {
    const matchesGenre = genre === ALL_GENRES || book.genre === genre;
    const matchesSearch = `${book.title} ${book.author}`.toLowerCase().includes(query);
    return matchesGenre && matchesSearch;
  });
};

const sorters = {
  [SORT_BY.TITLE]: (a, b) => a.title.localeCompare(b.title, SORT_LOCALE),
  [SORT_BY.YEAR]: (a, b) => b.year - a.year,
  [SORT_BY.RATING]: (a, b) => b.rating - a.rating,
};

export const sortBooks = (books, sort) => [...books].sort(sorters[sort]);

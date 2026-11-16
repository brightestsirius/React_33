# Фінальний проект: «Книжкова полиця» на webpack

Каталог книг з пошуком, фільтром за жанром, сортуванням, CRUD через mockapi і статистикою в модалці Bootstrap.
Проект зібраний з тем курсу: DOM, масиви та їх методи, класи, ES-модулі, fetch/async-await, CRUD, JSON, SCSS.

Дві версії одного й того самого застосунку:

| Папка    | Що всередині                                                                                       |
| -------- | -------------------------------------------------------------------------------------------------- |
| `start/` | Без збирача: нативні ES-модулі, готовий CSS, normalize.css і весь Bootstrap з CDN |
| `final/` | Те саме на webpack: SCSS, Babel, ESLint, dev-server, хеші, мініфікація, dynamic import, analyzer   |

Розмітка `<body>` і логіка в обох версіях однакові — відрізняється лише спосіб збирання.

## Запуск

### start

Відкрити `start/index.html` через Live Server (ES-модулі з `file://` не працюють).

### final

```bash
cd final
npm i
npm start        # dev-server на http://localhost:4200
npm run build    # production-збірка в dist/
npm run dev      # development-збірка в dist/
npm run watch    # development + перезбирання при змінах
npm run analyze  # production-збірка + Bundle Analyzer на http://127.0.0.1:8888
```

## mockapi

API: `https://6af1f8e942c6561ced38dcd0.mockapi.io/books` (той самий проект, що й `users` у lesson_34).

Схема ресурсу `books`: `title` — String, `author` — String, `year` — Number, `genre` — String, `rating` — Number.

Копія даних лежить у `final/src/data/books.json` і `start/data/books.json` — на випадок, якщо ресурс доведеться заповнити заново.

## Структура final

```
final/
├── webpack.config.js
├── .eslintrc / .browserslistrc
└── src/
    ├── index.html            — шаблон для HtmlWebpackPlugin
    ├── index.js              — точка входу (entry)
    ├── constants.js          — константи замість magic strings (фільтр, сортування, типи повідомлень)
    ├── api/service.js        — CRUD через fetch
    ├── components/           — класи BookCard, BookForm, Notice
    ├── modules/stats.js      — завантажується через import() разом з модалкою Bootstrap
    ├── utils/                — фільтрація/сортування, хелпери DOM
    ├── data/                 — genres.js (список жанрів), books.json (копія даних mockapi, у коді не використовується)
    ├── scss/                 — @use, змінні, міксини, власна функція rem(), мапа + @each, sass:color
    │   ├── main.scss         — основні стилі (entry main)
    │   ├── stats.scss        — стилі модалки, окремий CSS-чанк
    │   └── vendor/           — часткове підключення Bootstrap
    └── assets/               — шрифти, svg, favicon
```

## Що показати: до і після

Виміряно в Chrome при першому завантаженні сторінки (`start` через статичний сервер, `final` — `npm run build`), розміри без gzip:

|                       | start                                            | final                                         |
| --------------------- | ------------------------------------------------ | --------------------------------------------- |
| Запитів усього        | 22                                               | 10                                            |
| JS-файлів / розмір    | 9 файлів, ~91 KB                                 | 1 файл, ~11 KB                                |
| CSS-файлів / розмір   | 3 файли, ~239 KB                                 | 1 файл, ~6 KB (мініфікований)                 |
| Bootstrap             | увесь: ~228 KB CSS + ~80 KB JS, одразу           | лише модалка: ~11 KB CSS + ~22 KB JS, після кліку «Статистика» |
| npm-пакети            | лише через CDN і глобальну `bootstrap`           | `import Modal from "bootstrap/js/dist/modal"` |
| Стилі                 | готовий CSS                                      | SCSS-модулі, компілюються під час збірки      |
| Кешування             | `style.css` / `index.js` — без версій            | `main.[contenthash].js`                       |
| Старі браузери        | синтаксис як написано                            | Babel за `.browserslistrc`                    |

## Bootstrap: як підключати бібліотеку оптимально

Бібліотеку не обов'язково підключати цілком. Bootstrap складається з окремих модулів, і webpack дозволяє взяти лише потрібні.

**SCSS** — [final/src/scss/vendor/_bootstrap-modal.scss](final/src/scss/vendor/_bootstrap-modal.scss):
спочатку обов'язкова основа (`functions`, `variables`, `maps`, `mixins`, `root`), потім лише компоненти
`transitions`, `modal`, `close`. Перед підключенням змінних Bootstrap можна перевизначити їх під свій дизайн
(шрифт, радіус, відступи).

**JS** — [final/src/modules/stats.js](final/src/modules/stats.js):

```js
import { Modal } from "bootstrap";              // весь Bootstrap JS
import Modal from "bootstrap/js/dist/modal";    // лише модалка та її залежності
```

**Ліниве завантаження** — `stats.js` імпортує і модалку, і `stats.scss`, а сам `stats.js` підключається через `import()`.
Тому webpack виносить JS і CSS модалки в окремі чанки, які браузер завантажує лише після кліку.

Побічний ефект повного підключення видно в `start/`: Reboot з `bootstrap.min.css` змінює стилі всієї сторінки
(жирні `dt`, відступи заголовків), хоча Bootstrap був потрібен лише для модалки.

## План заняття (2 години)

Кожен крок — один шматок `webpack.config.js`. Конфіг у `final/` вже зібраний повністю,
його зручно відкривати поруч і розбирати по блоках.

| Час       | Тема                                                                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0–10      | **Проблема.** Відкрити `start/`, вкладка Network: 22 запити, CDN, порядок `<script>`, `import ... from "bootstrap"` у браузері не працює, Bootstrap підключений увесь заради однієї модалки  |
| 10–25     | **Основи.** `npm init`, `webpack` + `webpack-cli`, `entry`/`output`, `mode`, `npx webpack`. Імпорти з `node_modules`                                         |
| 25–40     | **HTML і скрипти.** `html-webpack-plugin`, `clean-webpack-plugin`, скрипти `dev`/`build`/`watch`, `[contenthash]`                                            |
| 40–60     | **Стилі та ассети.** `css-loader` → `mini-css-extract-plugin`, `sass-loader` + `sass` (порядок лоадерів справа наліво), картинки в JS і в SCSS, шрифти, `resolve.alias` |
| 60–75     | **Розробка.** `webpack-dev-server`, `cross-env` + `IS_DEV`, `devtool: 'source-map'` (показати оригінальний код у DevTools → Sources), `copy-webpack-plugin` для favicon |
| 75–90     | **Продакшн.** Babel + `.browserslistrc` (показати, у що перетворюються стрілки та `async`), `terser` і `css-minimizer`, `splitChunks`                          |
| 90–105    | **Якість і швидкість.** `eslint-webpack-plugin` (додати невикористану змінну — побачити warning), `import()` для статистики — JS- і CSS-чанки модалки в Network лише після кліку |
| 105–120   | **Підсумок.** `npm run build` → розібрати `dist/`, `npm run analyze` (модалка Bootstrap у власному чанку, решта Bootstrap у бандл не потрапила), таблиця «до/після», питання                        |

## Відмінності від конспекту лекції

- **Less не використовується**, лише SCSS. TypeScript і React теж не підключені.
- **ESLint 8** + `eslint-webpack-plugin@4`, щоб працював `.eslintrc` з лекції.
  Новіші версії плагіна вимагають ESLint 9 з flat config (`eslint.config.js`).
- **Аналіз бандла** зроблено через `BundleAnalyzerPlugin` і змінну `ANALYZE=true`.
  Варіант з лекції (`webpack --profile --json > stats.json`) ламається, бо `console.log` у конфігу
  потрапляє в той самий stdout, і `stats.json` перестає бути валідним JSON.
- **`style-loader`** не встановлений: у фінальному конфігу CSS завжди виноситься в окремий файл.
  На занятті його можна поставити для першого кроку і потім замінити на `MiniCssExtractPlugin.loader`.
- **`CleanWebpackPlugin`** залишено як у лекції; у webpack 5 те саме робить `output.clean: true`.
- У production-збірці vendor-чанк з модалкою має числове ім'я (`js/663.[hash].js`),
  у development — читабельне (`vendors-node_modules_bootstrap_js_dist_modal_js.js`).
- У `sass-loader` вимкнені попередження Sass про `@import`: Bootstrap 5 досі написаний на ньому.

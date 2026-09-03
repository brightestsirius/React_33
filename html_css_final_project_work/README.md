# Positivus Landing Page — Workshop

Навчальна копія адаптивної верстки головної сторінки Positivus. У `index.html` окремо закоментовані header, усі секції та footer. У `src/sass/main.sass` закоментовані відповідні підключення стилів, тому блоки можна послідовно розкоментовувати під час заняття.

Для кожного етапу потрібно:

1. Розкоментувати потрібний HTML-блок у `index.html`.
2. Розкоментувати його `@use` у `src/sass/main.sass`.
3. Зберегти файли — запущений `pnpm dev` автоматично перебудує проєкт.

## Технології

- HTML5 із семантичною розміткою;
- Sass із partial-файлами, змінними, mixin-ами та mobile-first media queries;
- Bootstrap 5.3: Reboot, Grid, Navbar/Collapse, Accordion, Carousel, Forms і Utilities;
- Tailwind CSS 3.4: utility-класи з префіксом `tw-`;
- Gulp для складання CSS, JavaScript і SVG-спрайта;
- PostCSS та Autoprefixer;
- esbuild для складання Bootstrap JavaScript;
- pnpm для керування залежностями.

## Структура

```text
assets/                 статичні зображення та вихідні SVG-іконки
src/js/                 вихідний JavaScript
src/sass/               вихідні Sass-файли
dist/styles/            зібраний CSS
dist/scripts/           зібраний JavaScript
dist/assets/icons/      згенерований SVG-спрайт
index.html              сторінка проєкту
```

У `dist/` генеруються лише результати складання. Звичайні зображення не копіюються і завантажуються безпосередньо з `assets/`.

## Особливості стилів

- стилі написані за принципом mobile-first;
- точки перелому зберігаються в Sass-карті: `tablet — 768px`, `desktop — 992px`;
- media queries створюються через спільний mixin `media()`;
- Services і Team на tablet відображаються по дві картки в ряд;
- Case Studies показує частину наступної картки на mobile, дві картки на tablet і три на desktop;
- багаторядковий фон заголовків створюється mixin-ом `text-highlight()` без додаткових `span` у HTML;
- Tailwind використовується для адаптивного вирівнювання тексту, а класи мають префікс `tw-`.

## Запуск проєкту

1. Встановити [Node.js](https://nodejs.org/) і [pnpm](https://pnpm.io/installation).

2. Перейти до папки проєкту:

   ```bash
   cd html_css_final_project
   ```

3. Встановити залежності:

   ```bash
   pnpm install
   ```

4. Запустити режим розробки:

   ```bash
   pnpm dev
   ```

   Gulp створить CSS із source map, JavaScript і SVG-спрайт, після чого стежитиме за змінами.

5. Відкрити кореневий `index.html` через Live Server або інший локальний HTTP-сервер.

6. Для production-збірки виконати:

   ```bash
   pnpm build
   ```

   Результат: `dist/styles/style.min.css`, `dist/scripts/main.min.js` і `dist/assets/icons/sprite.svg`.

## Команди

```bash
pnpm dev       # dev-збірка та спостереження за файлами
pnpm build     # production-збірка
pnpm styles    # складання CSS із source map
pnpm sprite    # повторне створення SVG-спрайта
```

## Особливість складання Sass

Bootstrap 5.3 у своїх SCSS-файлах ще використовує API, які Dart Sass позначає як застарілі. Тому в `gulpfile.js` налаштовано `sassOptions.silenceDeprecations` для відомих попереджень залежності:

```js
const sassOptions = {
  silenceDeprecations: ["import", "global-builtin", "color-functions", "if-function"],
};
```

Це не вимикає помилки компіляції Sass. Налаштування лише прибирає відповідні deprecation-попередження під час складання Bootstrap.

## Документація Bootstrap

- [Підключення окремих Sass-модулів Bootstrap](https://getbootstrap.com/docs/5.3/customize/sass/#importing)
- [Оптимізація Sass і JavaScript imports](https://getbootstrap.com/docs/5.3/customize/optimize/)
- [Reboot — базове скидання стилів](https://getbootstrap.com/docs/5.3/content/reboot/)
- [Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Navbar і responsive Collapse](https://getbootstrap.com/docs/5.3/components/navbar/)
- [Accordion](https://getbootstrap.com/docs/5.3/components/accordion/)
- [Carousel, controls та indicators](https://getbootstrap.com/docs/5.3/components/carousel/)
- [Form controls](https://getbootstrap.com/docs/5.3/forms/form-control/)
- [Form checks і radio](https://getbootstrap.com/docs/5.3/forms/checks-radios/)
- [Utility API](https://getbootstrap.com/docs/5.3/utilities/api/)

## Документація Tailwind CSS 3

- [Встановлення Tailwind CSS 3](https://v3.tailwindcss.com/docs/installation)
- [Підключення через PostCSS](https://v3.tailwindcss.com/docs/installation/using-postcss)
- [Content configuration](https://v3.tailwindcss.com/docs/content-configuration)
- [Configuration і prefix](https://v3.tailwindcss.com/docs/configuration#prefix)
- [Responsive utility-класи](https://v3.tailwindcss.com/docs/responsive-design)
- [Text alignment](https://v3.tailwindcss.com/docs/text-align)

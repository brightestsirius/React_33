const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

// DEV
function makeStylesDev(srcPath, outName) {
  const task = () =>
    src(srcPath)
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss([tailwindcss(), autoprefixer()]))
      .pipe(rename(outName))
      .pipe(sourcemaps.write("."))
      .pipe(dest("./styles"));
  task.displayName = `styles:${outName}`;
  return task;
}

// PRODUCTION
function makeStylesProd(srcPath, outName) {
  const task = () =>
    src(srcPath)
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss([tailwindcss(), autoprefixer()]))
      .pipe(cleanCSS())
      .pipe(rename(outName))
      .pipe(dest("./styles"));
  task.displayName = `styles:${outName}:prod`;
  return task;
}

const styles = makeStylesDev("./sass/tailwind-pnpm.sass", "tailwind-pnpm.css");
const stylesProd = makeStylesProd(
  "./sass/tailwind-pnpm.sass",
  "tailwind-pnpm.css"
);

// WATCH
function watchFiles() {
  watch(["./sass/**/*.sass", "./02-intro-pnpm/**/*.html"], series(styles));
}

exports.dev = series(styles, watchFiles);
exports.build = series(stylesProd);

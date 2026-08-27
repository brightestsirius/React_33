const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

// DEV
function styles() {
  return src("./sass/main.sass")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(rename("style.css"))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./styles"));
}

// PRODUCTION
function stylesProd() {
  return src("./sass/main.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(rename("style.css"))
    .pipe(dest("./styles"));
}

// WATCH
function watchFiles() {
  watch("./sass/**/*.sass", styles);
}

exports.dev = series(styles, watchFiles);
exports.build = series(stylesProd);

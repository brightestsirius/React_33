const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const svgSprite = require("gulp-svg-sprite");

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

// SVG SPRITE
function sprite() {
  return src("./icons/*.svg")
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            dest: ".",
            sprite: "sprite.svg",
          },
        },
      }),
    )
    .pipe(dest("./images"));
}

// WATCH
function watchFiles() {
  watch("./sass/**/*.sass", styles);
  watch("./icons/*.svg", sprite);
}

exports.dev = series(styles, sprite, watchFiles);
exports.build = series(stylesProd, sprite);

exports.styles = styles;
exports.sprite = sprite;

const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

// DEV
function makeStylesDev(srcPath, outName) {
  const task = () =>
    src(srcPath)
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss([autoprefixer()]))
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
      .pipe(postcss([autoprefixer()]))
      .pipe(cleanCSS())
      .pipe(rename(outName))
      .pipe(dest("./styles"));
  task.displayName = `styles:${outName}:prod`;
  return task;
}

const styles = makeStylesDev("./sass/main.sass", "style.css");
const stylesCustomColorsSass = makeStylesDev(
  "./sass/custom-colors-sass.sass",
  "custom-colors-sass.css"
);
const stylesProd = makeStylesProd("./sass/main.sass", "style.css");
const stylesCustomColorsSassProd = makeStylesProd(
  "./sass/custom-colors-sass.sass",
  "custom-colors-sass.css"
);

// WATCH
function watchFiles() {
  watch("./sass/**/*.sass", series(styles, stylesCustomColorsSass));
}

exports.dev = series(styles, stylesCustomColorsSass, watchFiles);
exports.build = series(stylesProd, stylesCustomColorsSassProd);

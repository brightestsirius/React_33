// path — вбудований модуль Node.js для роботи зі шляхами до файлів
const path = require('path');

// Створює dist/index.html з шаблону src/index.html і сам підключає в нього зібрані JS і CSS
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Перед кожною збіркою очищає папку dist від старих файлів
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// Копіює файли в dist як є, без обробки (у нас — favicon)
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Виносить CSS з JS-бандла в окремі .css файли
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Мініфікує CSS: прибирає пробіли, коментарі, переноси рядків
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
// Мініфікує JS: прибирає пробіли й коментарі, скорочує імена змінних
const TerserPlugin = require('terser-webpack-plugin');
// Запускає ESLint під час збірки (правила — у файлі .eslintrc)
const EslintWebpackPlugin = require('eslint-webpack-plugin');
// Показує в браузері карту бандла: з чого він складається і що скільки важить
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Режим задається через cross-env у package.json
const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = !IS_DEV;
// true лише для npm run analyze
const IS_ANALYZE = process.env.ANALYZE === 'true';

console.log('IS DEV:', IS_DEV);
console.log('IS PROD:', IS_PROD);

// У dev — читабельні імена, у prod — хеш для кешування браузером
const filename = (ext) => {
  return IS_DEV ?
    `${ext}/[name].${ext}` :
    `${ext}/[name].[contenthash].${ext}`;
};

// Оптимізація бандла
const optimization = () => {
  return {
    // Код з node_modules (наприклад, Bootstrap Modal) виноситься в окремі vendor-чанки
    splitChunks: {
      chunks: 'all',
    },
    // Мініфікація лише в production
    minimize: IS_PROD,
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      // extractComments: false — без окремого .LICENSE.txt поруч з бандлом
      new TerserPlugin({ extractComments: false }),
    ],
  };
};

// Лоадери виконуються справа наліво: sass-loader -> css-loader -> MiniCssExtractPlugin.loader
const cssLoaders = (extra) => {
  const loaders = [
    // Забирає готовий CSS і передає його в MiniCssExtractPlugin, який запише окремий файл
    { loader: MiniCssExtractPlugin.loader },
    // Розуміє @import і url() у CSS: шрифти й картинки теж потрапляють у збірку
    'css-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const setPlugins = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon/favicon.ico'),
          to: path.resolve(__dirname, 'dist/assets/favicon'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      // Ім'я для CSS основної сторінки
      filename: filename('css'),
      // Ім'я для CSS, що завантажується через import() (у нас — стилі модалки)
      chunkFilename: filename('css'),
    }),
    new EslintWebpackPlugin({
      // Які файли перевіряти
      extensions: ['js'],
      // Автоматично виправляти те, що ESLint вміє виправити сам
      fix: true,
    }),
  ];

  // Аналізатор потрібен лише для npm run analyze
  if (IS_ANALYZE) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
};

module.exports = {
  // Папка з вихідним кодом: усі відносні шляхи нижче рахуються від src
  context: path.resolve(__dirname, 'src'),
  // development — швидка збірка й читабельний код, production — оптимізація для користувача
  mode: IS_DEV ? 'development' : 'production',
  // Точка входу: з цього файлу webpack починає збирати граф залежностей
  entry: {
    main: './index.js',
  },
  // Збираємо для браузера
  target: 'web',
  // Куди й під якими іменами класти результат
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename('js'),
    // Ім'я для чанків з динамічного import()
    chunkFilename: filename('js'),
  },
  // Як шукати файли в import
  resolve: {
    // Короткі шляхи: import "@/utils/dom.js" замість "../../utils/dom.js"
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
    // Ці розширення можна не писати в import
    extensions: ['.js', '.json'],
  },
  optimization: optimization(),
  // Локальний сервер для npm start: збирає в пам'ять і оновлює сторінку після змін
  devServer: {
    port: 4200,
    hot: false,
  },
  // Source maps: у DevTools видно оригінальний код замість зібраного (лише в dev)
  devtool: IS_DEV ? 'source-map' : false,
  plugins: setPlugins(),
  // Правила: як обробляти файли різних типів
  module: {
    rules: [
      // JS — через Babel: сучасний синтаксис переписується під браузери з .browserslistrc
      {
        test: /\.m?js$/,
        // Бібліотеки з node_modules вже зібрані їхніми авторами
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // CSS (у нас — normalize.css з node_modules)
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      // SCSS — спочатку sass-loader компілює його в CSS, далі як звичайний CSS
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders({
          loader: 'sass-loader',
          options: {
            sassOptions: {
              // Bootstrap 5 написаний на застарілому @import — ховаємо попередження Sass про це
              quietDeps: true,
              silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
            },
          },
        }),
      },
      // Картинки: копіюються в dist/assets/images, а в коді замість імпорту — їхній URL
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
      // Шрифти: так само, але в dist/assets/fonts
      {
        test: /\.(woff|woff2|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]',
        },
      },
    ],
  },
};

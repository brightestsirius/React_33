const slides = [
  { image: `https://picsum.photos/id/1015/800/450`, title: `Річка в горах` },
  { image: `https://picsum.photos/id/1018/800/450`, title: `Гірська долина` },
  { image: `https://picsum.photos/id/1039/800/450`, title: `Водоспад` },
  { image: `https://picsum.photos/id/1043/800/450`, title: `Осінній ліс` },
  { image: `https://picsum.photos/id/1056/800/450`, title: `Вечірнє місто` },
];

const getNextIndex = (index, length) => (index === length - 1 ? 0 : index + 1);
const getPrevIndex = (index, length) => (index === 0 ? length - 1 : index - 1);

const createSlideHTML = ({ image, title }) => `
  <div class="slider__slide">
    <img src="${image}" alt="${title}" />
    <h2 class="slider__title">${title}</h2>
  </div>
`;

const setActive = (elements, activeIndex) => {
  elements.forEach((element) => element.classList.remove(`active`));
  elements[activeIndex].classList.add(`active`);
};

const createDot = (onClick) => {
  const dot = document.createElement(`button`);
  dot.className = `slider__dot`;
  dot.addEventListener(`click`, onClick);
  return dot;
};

const createSlider = (selector, slides) => {
  const slider = document.querySelector(selector);
  const track = slider.querySelector(`.slider__track`);
  const counter = slider.querySelector(`.slider__counter`);
  const dotsContainer = slider.querySelector(`.slider__dots`);
  const prevBtn = slider.querySelector(`.slider__btn--prev`);
  const nextBtn = slider.querySelector(`.slider__btn--next`);

  let current = 0;

  track.innerHTML = slides.map(createSlideHTML).join(``);
  const slideElements = [...track.querySelectorAll(`.slider__slide`)];

  const showSlide = (index) => {
    current = index;
    setActive(slideElements, current);
    setActive(dots, current);
    counter.textContent = `${current + 1} / ${slides.length}`;
  };

  const dots = slides.map((slide, index) => createDot(() => showSlide(index)));
  dots.forEach((dot) => dotsContainer.appendChild(dot));

  prevBtn.addEventListener(`click`, () => showSlide(getPrevIndex(current, slides.length)));
  nextBtn.addEventListener(`click`, () => showSlide(getNextIndex(current, slides.length)));

  showSlide(0);
};

createSlider(`#slider`, slides);

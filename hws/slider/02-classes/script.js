const slides = [
  { image: `https://picsum.photos/id/1015/800/450`, title: `Річка в горах` },
  { image: `https://picsum.photos/id/1018/800/450`, title: `Гірська долина` },
  { image: `https://picsum.photos/id/1039/800/450`, title: `Водоспад` },
  { image: `https://picsum.photos/id/1043/800/450`, title: `Осінній ліс` },
  { image: `https://picsum.photos/id/1056/800/450`, title: `Вечірнє місто` },
];

class Slider {
  #current = 0;

  constructor(selector, slides) {
    this.slider = document.querySelector(selector);
    this.slides = slides;
    this.track = this.slider.querySelector(`.slider__track`);
    this.counter = this.slider.querySelector(`.slider__counter`);
    this.prevBtn = this.slider.querySelector(`.slider__btn--prev`);
    this.nextBtn = this.slider.querySelector(`.slider__btn--next`);

    this.render();
    this.addListeners();
    this.show(0);
  }

  get current() {
    return this.#current;
  }

  get total() {
    return this.slides.length;
  }

  render() {
    this.track.innerHTML = this.slides
      .map(
        ({ image, title }) => `
          <div class="slider__slide">
            <img src="${image}" alt="${title}" />
            <h2 class="slider__title">${title}</h2>
          </div>
        `,
      )
      .join(``);

    this.slideElements = [...this.track.querySelectorAll(`.slider__slide`)];
  }

  addListeners() {
    this.prevBtn.addEventListener(`click`, () => this.prev());
    this.nextBtn.addEventListener(`click`, () => this.next());
  }

  setActive(elements, activeIndex) {
    elements.forEach((element) => element.classList.remove(`active`));
    elements[activeIndex].classList.add(`active`);
  }

  show(index) {
    this.#current = index;
    this.setActive(this.slideElements, index);
    this.counter.textContent = `${index + 1} / ${this.total}`;
  }

  next() {
    this.show(this.current === this.total - 1 ? 0 : this.current + 1);
  }

  prev() {
    this.show(this.current === 0 ? this.total - 1 : this.current - 1);
  }
}

class DotsSlider extends Slider {
  render() {
    super.render();

    this.dotsContainer = this.slider.querySelector(`.slider__dots`);
    this.dots = this.slides.map((slide, index) => this.createDot(index));
    this.dots.forEach((dot) => this.dotsContainer.appendChild(dot));
  }

  createDot(index) {
    const dot = document.createElement(`button`);
    dot.className = `slider__dot`;
    dot.addEventListener(`click`, () => this.show(index));
    return dot;
  }

  show(index) {
    super.show(index);
    this.setActive(this.dots, index);
  }
}

const simpleSlider = new Slider(`#simpleSlider`, slides);
const dotsSlider = new DotsSlider(`#dotsSlider`, slides);

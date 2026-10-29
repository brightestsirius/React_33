const Counter = require("../src/Counter");

describe("Counter", () => {
  let counter;

  beforeEach(() => {
    // кожен тест отримує "чистий" лічильник — тести не залежать один від одного
    counter = new Counter();
  });

  afterEach(() => {
    counter = null;
  });

  it("стартує з 0", () => {
    expect(counter.value).toBe(0);
  });

  it("increment збільшує на 1", () => {
    counter.increment();
    expect(counter.value).toBe(1);
  });

  it("decrement зменшує на 1", () => {
    counter.decrement();
    expect(counter.value).toBe(-1);
  });
});

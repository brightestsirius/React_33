// Jest сам знаходить файли *.test.js та *.spec.js
// Запуск: npm test  (або npx jest 01_first_test)
// Один тест за назвою: npm test -- -t "додає від'ємні числа"
// Те саме, але шукати лише у файлі sum: npm test -- sum -t "додає від'ємні числа"

const sum = require("./sum");

test("додає 1 + 2, щоб отримати 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// it — те саме, що test
it("додає від'ємні числа", () => {
  expect(sum(-1, -2)).toBe(-3);
});

// describe групує пов'язані тести
describe("sum", () => {
  test("0 + 0 = 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("дробові числа", () => {
    // 0.1 + 0.2 = 0.30000000000000004, тому toBe(0.3) впаде
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

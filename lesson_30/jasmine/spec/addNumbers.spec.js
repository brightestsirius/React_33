// Запуск: npm test (або npx jasmine spec/addNumbers.spec.js)
// Один тест за назвою: npm test -- --filter="правильно додає два числа"
// Які файли запускати, вказано в package.json: jasmine "spec/*.spec.js"

const addNumbers = require("../src/addNumbers");

describe("addNumbers", () => {
  it("правильно додає два числа", () => {
    expect(addNumbers(1, 2)).toEqual(3);
  });

  it("працює з від'ємними числами", () => {
    expect(addNumbers(-1, -2)).toBe(-3);
  });

  // Розкоментувати, щоб побачити, як виглядає тест, що впав
  // it("навмисно падаючий тест", () => {
  //   expect(addNumbers(2, 2)).toBe(5);
  // });
});

const divide = require("../src/divide");

describe("Matchers", () => {
  describe("toBe vs toEqual", () => {
    // toBe    — строга рівність ===, для об'єктів порівнює ПОСИЛАННЯ (той самий об'єкт у пам'яті)
    // toEqual — порівнює ВМІСТ, рекурсивно обходить усі поля

    it("для примітивів різниці немає", () => {
      expect(3).toBe(3);
      expect(3).toEqual(3);
      expect("abc").toBe("abc");
      expect("abc").toEqual("abc");
    });

    it("об'єкти: toEqual порівнює вміст, toBe — посилання", () => {
      const user = { name: "Anna" };

      expect(user).toEqual({ name: "Anna" }); // ✓ вміст однаковий
      expect(user).not.toBe({ name: "Anna" }); // ✓ це два різні об'єкти: { } === { } → false
      expect(user).toBe(user); // ✓ той самий об'єкт
    });

    it("масиви: те саме", () => {
      expect([1, 2, 3]).toEqual([1, 2, 3]);
      expect([1, 2, 3]).not.toBe([1, 2, 3]);
    });

    it("копія об'єкта — рівна за вмістом, але інший об'єкт", () => {
      const user = { name: "Anna", address: { city: "Kyiv" } };
      const copy = { ...user };

      expect(copy).toEqual(user);
      expect(copy).not.toBe(user);
    });

    // Розкоментувати: тест впаде, а Jasmine підкаже "use .toEqual() instead of .toBe()"
    // it("типова помилка: toBe для об'єкта", () => {
    //   expect({ name: "Anna" }).toBe({ name: "Anna" });
    // });
  });

  it("toBeTruthy / toBeFalsy", () => {
    expect("hello").toBeTruthy();
    expect(1).toBeTruthy();
    expect("").toBeFalsy();
    expect(0).toBeFalsy();
    expect(null).toBeFalsy();
  });

  it("toContain", () => {
    expect([1, 2, 3]).toContain(2);
    expect("JavaScript").toContain("Script");
  });

  it("toThrow", () => {
    // функцію передаємо обгорнутою, а НЕ викликаємо: expect(divide(1, 0)) — помилка вилетить до expect
    expect(() => divide(1, 0)).toThrow();
    expect(() => divide(1, 0)).toThrowError("Division by zero");
    expect(() => divide(4, 2)).not.toThrow();
  });
});

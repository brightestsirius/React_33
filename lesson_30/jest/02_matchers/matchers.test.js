describe("Рівність", () => {
  test("toBe — строга рівність (===)", () => {
    expect(2 + 2).toBe(4);
    expect("abc").toBe("abc");
  });

  test("toEqual — рекурсивно порівнює об'єкти та масиви", () => {
    const user = { name: "Anna", skills: ["js", "css"] };

    expect(user).toEqual({ name: "Anna", skills: ["js", "css"] });
    expect(user).not.toBe({ name: "Anna", skills: ["js", "css"] }); // різні посилання
  });
});

describe("null / undefined / truthy / falsy", () => {
  test("null", () => {
    const value = null;

    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeFalsy();
  });

  test("undefined", () => {
    let value;

    expect(value).toBeUndefined();
    expect(value).not.toBeDefined();
  });

  test("truthy", () => {
    expect("text").toBeTruthy();
    expect([]).toBeTruthy();
    expect(0).toBeFalsy();
  });
});

describe("Числа", () => {
  const value = 10;

  test("порівняння", () => {
    expect(value).toBeGreaterThan(5);
    expect(value).toBeGreaterThanOrEqual(10);
    expect(value).toBeLessThan(20);
  });

  test("toBeCloseTo — для дробових чисел", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
    expect(3.14159).toBeCloseTo(3.14, 2);
  });
});

describe("Рядки та масиви", () => {
  test("toMatch — рядок або регулярний вираз", () => {
    expect("hello@gmail.com").toMatch(/@/);
    expect("JavaScript").toMatch("Script");
  });

  test("toContain / toHaveLength", () => {
    const fruits = ["apple", "banana", "orange"];

    expect(fruits).toContain("banana");
    expect(fruits).toHaveLength(3);
  });

  test("toHaveProperty", () => {
    const user = { name: "Anna", address: { city: "Kyiv" } };

    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("address.city", "Kyiv");
  });
});

describe("Помилки", () => {
  function parseAge(value) {
    const age = Number(value);
    if (Number.isNaN(age)) throw new TypeError("Age must be a number");
    return age;
  }

  test("toThrow", () => {
    // ✅ обгортаємо у функцію
    expect(() => parseAge("abc")).toThrow();
    expect(() => parseAge("abc")).toThrow(TypeError);
    expect(() => parseAge("abc")).toThrow("Age must be a number");
    expect(() => parseAge("18")).not.toThrow();

    // ❌ так не можна — помилка вилетить ще до expect
    // expect(parseAge("abc")).toThrow();
  });
});

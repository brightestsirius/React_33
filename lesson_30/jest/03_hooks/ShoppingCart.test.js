const ShoppingCart = require("./ShoppingCart");

// Порядок виконання хуків видно в консолі — розкоментувати console.log
describe("ShoppingCart", () => {
  let cart;

  beforeAll(() => {
    // один раз перед усіма тестами (підключення до БД, читання файлу...)
    //console.log("beforeAll");
  });

  beforeEach(() => {
    // перед КОЖНИМ тестом — новий кошик, тести ізольовані
    //console.log("beforeEach");
    cart = new ShoppingCart();
  });

  afterEach(() => {
    //console.log("afterEach");
    cart.clear();
  });

  afterAll(() => {
    //console.log("afterAll");
  });

  test("новий кошик порожній", () => {
    expect(cart.items).toHaveLength(0);
    expect(cart.getTotal()).toBe(0);
  });

  // вкладений describe — групуємо за функціональністю
  describe("addItem", () => {
    test("додає товар", () => {
      cart.addItem("Book", 200);

      expect(cart.items).toContainEqual({
        name: "Book",
        price: 200,
        quantity: 1,
      });
    });

    test("кидає помилку для від'ємної ціни", () => {
      expect(() => cart.addItem("Book", -1)).toThrow(
        "Price cannot be negative",
      );
    });
  });

  describe("removeItem", () => {
    test("видаляє товар за назвою", () => {
      cart.addItem("Book", 200);
      cart.addItem("Pen", 20);

      cart.removeItem("Book");

      expect(cart.items).toEqual([{ name: "Pen", price: 20, quantity: 1 }]);
    });
  });

  describe("getTotal", () => {
    test("рахує суму з урахуванням кількості", () => {
      cart.addItem("Book", 200, 2);
      cart.addItem("Pen", 20, 3);

      expect(cart.getTotal()).toBe(460);
    });
  });

  // test.skip / test.only — корисно під час налагодження
  test.skip("ще не реалізовано: знижки", () => {});
  test.todo("застосування промокоду");
});

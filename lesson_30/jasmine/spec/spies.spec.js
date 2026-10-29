const { logger, greet } = require("../src/greet");

describe("Spies", () => {
  it("spyOn — стежимо за існуючим методом", () => {
    spyOn(logger, "log"); // за замовчуванням оригінал НЕ викликається — у консолі нічого не буде

    greet("World");

    expect(logger.log).toHaveBeenCalled();
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(logger.log).toHaveBeenCalledWith("Hello, World!");
  });
});

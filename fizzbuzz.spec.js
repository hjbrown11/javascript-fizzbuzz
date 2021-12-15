const fizzbuzz = require("./fizzbuzz");

test("returns fizz if num modulus 3 is equal to 0", () => {
  expect(fizzbuzz(3)).toBe("fizz");
});

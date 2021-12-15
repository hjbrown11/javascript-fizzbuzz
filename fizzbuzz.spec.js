const fizzbuzz = require("./fizzbuzz");

test("returns fizz if num modulus 3 is equal to 0", () => {
  expect(fizzbuzz(3)).toBe("fizz");
});

test("returns buzz if num modulus 5 is equal to 0", () => {
  expect(fizzbuzz(5)).toBe("buzz");
});

test("returns fizzbuzz if num modulus 3 and 5 are equal to 0", () => {
  expect(fizzbuzz(15)).toBe("fizzbuzz");
});

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

test("returns num if num is not a multiple of 3 or 5", () => {
    expect(fizzbuzz(1)).toBe(1);
});

test("expect 7 to return 7", () => {
    expect(fizzbuzz(7)).toBe(7);
});

test("expect 30 to return fizzbuzz", () => {
    expect(fizzbuzz(30)).toBe("fizzbuzz");
});

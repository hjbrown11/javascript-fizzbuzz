const fizzbuzz = require('./fizzbuzz');

test('returns fizz if num is multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz');
});

const script = require('../calc.js');
const mult = script.mult;
describe('Функция mult(a,b)', () => {
  it('должна возвращать 6 при аргументах (3, 2)', () => {
    expect(mult(3, 2)).toBe(6);
  })
});
describe('Функция mult(a,b)', () => {
  it('должна возвращать 6 при аргументах (2, 3)', () => {
    expect(mult(2, 3)).toBe(6);
  })
});
describe('Функция mult(a,b)', () => {
  it('должна возвращать NaN при аргументах (undefined, 2)', () => {
    expect(isNaN(mult(undefined, 2))).toBe(true);
  })
});
describe('Функция sum(a,b)', () => {
  it('должна возвращать 6 при аргументах ("2", "3")', () => {
    expect(mult("2", "3")).toBe(6);
  })
});
describe('Функция sum(a,b)', () => {
  it('должна возвращать 6 при аргументах (2, "3")', () => {
    expect(mult(2, "3")).toBe(6);
  })
});
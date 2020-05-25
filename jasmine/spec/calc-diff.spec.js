const script = require('../calc.js');
const diff = script.diff;
describe('Функция diff(a,b)', () => {
  it('должна возвращать 1 при аргументах (3, 2)', () => {
    expect(diff(3, 2)).toBe(1);
  })
});
describe('Функция diff(a,b)', () => {
  it('должна возвращать -1 при аргументах (2, 3)', () => {
    expect(diff(2, 3)).toBe(-1);
  })
});
describe('Функция diff(a,b)', () => {
  it('должна возвращать NaN при аргументах (undefined, 2)', () => {
    expect(isNaN(diff(undefined, 2))).toBe(true);
  })
});
describe('Функция sum(a,b)', () => {
  it('должна возвращать -1 при аргументах ("2", "3")', () => {
    expect(diff("2", "3")).toBe(-1);
  })
});
describe('Функция sum(a,b)', () => {
  it('должна возвращать -1 при аргументах (2, "3")', () => {
    expect(diff(2, "3")).toBe(-1);
  })
});
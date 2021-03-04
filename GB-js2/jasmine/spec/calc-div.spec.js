const script = require('../calc.js');
const div = script.div;
describe('Функция div(a,b)', () => {
  it('должна возвращать 3 при аргументах (6, 2)', () => {
    expect(div(6, 2)).toBe(3);
  })
});
describe('Функция div(a,b)', () => {
  it('должна возвращать 0 при аргументах (0, 3)', () => {
    expect(div(0, 3)).toBe(0);
  })
});
describe('Функция div(a,b)', () => {
  it('должна возвращать Infinity при аргументах (3, 0)', () => {
    expect(isFinite(div(3, 0))).toBe(false);
  })
});
describe('Функция div(a,b)', () => {
  it('должна возвращать NaN при аргументах (undefined, 2)', () => {
    expect(isNaN(div(undefined, 2))).toBe(true);
  })
});
describe('Функция sum(a,b)', () => {
  it('должна возвращать 1.5 при аргументах ("6", "2")', () => {
    expect(div("6", "2")).toBe(3);
  })
});
describe('Функция sum(a,b)', () => {
  it('должна возвращать 3 при аргументах (6, "2")', () => {
    expect(div(6, "2")).toBe(3);
  })
});
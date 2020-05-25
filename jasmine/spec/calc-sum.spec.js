const script = require('../calc.js');
const sum = script.sum;
describe('Функция sum(a,b)', () => {
  it('должна возвращать 5 при аргументах (3, 2)', () => {
    expect(sum(3, 2)).toBe(5);
  })
});
describe('Функция sum(a,b)', () => {
  it('должна возвращать NaN при аргументах (undefined, 2)', () => {
    expect(isNaN(sum(undefined, 2))).toBe(true);
  })
});
describe('Функция sum(a,b)', () => {
  it('должна возвращать "23" при аргументах ("2", "3")', () => {
    expect(sum("2", "3")).toBe("23");
  })
});
describe('Функция sum(a,b)', () => {
  it('должна возвращать "23" при аргументах (2, "3")', () => {
    expect(sum(2, "3")).toBe("23");
  })
});
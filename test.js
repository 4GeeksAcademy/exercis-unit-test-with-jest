import { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } from './app.js';

test('adds 14 + 9 to equal 23', () => {
  expect(sum(14, 9)).toBe(23);
});

test('converts 3.5 Euro to Dollars', () => {
  expect(fromEuroToDollar(3.5)).toBe(3.5 * 1.07);
});

test('converts 1 Dollar to Yen', () => {
  expect(fromDollarToYen(1)).toBe(1 * 146.26);
});

test('converts 1000 Yen to Pounds', () => {
  expect(fromYenToPound(1000)).toBe(1000 * 0.00556);
});

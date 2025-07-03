// tutorial/part4.test.ts
import { doubleNumbers, getEvenNumbers } from './part4';

describe('Part 4: Array Methods', () => {
  test('doubleNumbers should return a new array with doubled numbers', () => {
    expect(doubleNumbers()).toEqual([2, 4, 6, 8, 10, 12]);
  });

  test('getEvenNumbers should return a new array with only even numbers', () => {
    expect(getEvenNumbers()).toEqual([2, 4, 6]);
  });
});

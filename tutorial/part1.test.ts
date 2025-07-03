// tutorial/part1.test.ts
import { myName, myAge } from './part1';

describe('Part 1: Variables and Constants', () => {
  test('myName should be a string with your name', () => {
    expect(typeof myName).toBe('string');
    expect(myName).not.toBe('Your Name');
  });

  test('myAge should be a number with your age', () => {
    expect(typeof myAge).toBe('number');
    expect(myAge).not.toBe(0);
  });
});

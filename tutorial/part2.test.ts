// tutorial/part2.test.ts
import { add, greet } from './part2';

describe('Part 2: Functions and Arrow Functions', () => {
  test('add function should return the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 5)).toBe(4);
  });

  test('greet arrow function should return a greeting message', () => {
    expect(greet('World')).toBe('Hello, World!');
    expect(greet('Jest')).toBe('Hello, Jest!');
  });
});

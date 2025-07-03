// tutorial/part5.test.ts
import { getUserInfo } from './part5';

describe('Part 5: TypeScript Types', () => {
  test('getUserInfo should return a correctly formatted string', () => {
    const result = getUserInfo('Bob', 25);
    expect(result).toBe('My name is Bob, and I am 25 years old.');
  });
});

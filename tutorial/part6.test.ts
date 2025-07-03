// tutorial/part6.test.ts
import { getUserName, mergeArrays } from './part6';

describe('Part 6: Destructuring and Spread Syntax', () => {
  test('getUserName should extract the name from the user object', () => {
    const user = { id: 1, name: 'Alice', email: 'alice@example.com' };
    expect(getUserName(user)).toBe('Alice');
  });

  test('mergeArrays should combine two arrays using spread syntax', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    expect(mergeArrays(arr1, arr2)).toEqual([1, 2, 3, 4]);
  });
});

// tutorial/part3.test.ts
import { userProfile, favoriteFoods } from './part3';

describe('Part 3: Objects and Arrays', () => {
  test('userProfile object should have correct properties and types', () => {
    expect(userProfile).toHaveProperty('name');
    expect(typeof userProfile.name).toBe('string');
    expect(userProfile).toHaveProperty('age');
    expect(typeof userProfile.age).toBe('number');
    expect(userProfile).toHaveProperty('department');
    expect(typeof userProfile.department).toBe('string');
  });

  test('favoriteFoods array should contain at least 3 items', () => {
    expect(Array.isArray(favoriteFoods)).toBe(true);
    expect(favoriteFoods.length).toBeGreaterThanOrEqual(3);
  });
});

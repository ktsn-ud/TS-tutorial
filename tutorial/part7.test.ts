// tutorial/part7.test.ts
import { Todo, formatId, displayUser } from './part7';

describe('Part 7: Advanced Types', () => {

  // Test for Type Alias
  test('Todo type should be defined correctly', () => {
    const myTodo: Todo = {
      id: 1,
      title: 'Learn TypeScript',
      isCompleted: false,
    };
    expect(typeof myTodo.id).toBe('number');
    expect(typeof myTodo.title).toBe('string');
    expect(typeof myTodo.isCompleted).toBe('boolean');
  });

  // Test for Union Types
  test('formatId should convert number to string or return string', () => {
    expect(formatId(123)).toBe('123');
    expect(formatId('abc')).toBe('abc');
  });

  // Test for Optional Properties
  test('displayUser should format user display name correctly', () => {
    const user1 = { id: 1, name: 'Taro' };
    const user2 = { id: 2, name: 'Jiro', nickname: 'Jiro-chan' };
    
    expect(displayUser(user1)).toBe('Taro');
    expect(displayUser(user2)).toBe('Jiro(Jiro-chan)');
  });
});

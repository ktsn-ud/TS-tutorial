// tutorial/part6.ts

// --- 分割代入 (Destructuring) ---
interface User {
  id: number;
  name: string;
  email: string;
}

// TODO: 分割代入を使って、userオブジェクトから `name` プロパティだけを取り出して返す関数を作成してください。
export function getUserName(user: User): string {
  // const { ... } = user;
  return ""; // この行を修正
}

// --- スプレッド構文 (Spread Syntax) ---

// TODO: スプレッド構文を使って、2つの配列を結合した新しい配列を返す関数を作成してください。
export function mergeArrays(arr1: number[], arr2: number[]): number[] {
  // return [...];
  return [];
}

// tutorial/part7.ts

// --- Type Aliases ---
// `type` を使うと、複雑な型に別名を付けることができます。
// ReactのコンポーネントのProps(引数)の型を定義する際によく使います。

// TODO: `id`(数値), `title`(文字列), `isCompleted`(真偽値) を持つ `Todo` という名前の型エイリアスを定義してください。
export type Todo = {
  // ここにプロパティを定義
};


// --- Union Types (共用体型) ---
// `|` を使うと、変数が複数の型を持つことを許容できます。

// TODO: `id` を受け取り、そのidが数値なら文字列に変換し、文字列ならそのまま返す `formatId` という関数を作成してください。
// 例: formatId(123) は "123" を返す
// 例: formatId("abc") は "abc" を返す
export function formatId(id: string | number): string {
  return ""; // この行を修正
}


// --- Optional Properties (?) ---
// プロパティ名の後ろに `?` を付けると、そのプロパティがなくても良いことを示せます。

interface UserProfile {
  id: number;
  name: string;
  nickname?: string; // nicknameはあってもなくても良い
}

// TODO: UserProfileオブジェクトを受け取り、nicknameがあれば「[name]([nickname])」、なければ「[name]」という文字列を返す `displayUser` という関数を作成してください。
export function displayUser(user: UserProfile): string {
  return ""; // この行を修正
}

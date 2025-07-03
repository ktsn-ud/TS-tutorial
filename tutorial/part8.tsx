// tutorial/part8.tsx
import React from 'react';

// --- Propsの型定義 ---
// コンポーネントが受け取るデータの型を定義します。
// Part 7で学んだ型エイリアスがここで活きてきます。
type UserProfileProps = {
  name: string;
  age: number;
  favoriteFood?: string; // オプショナルなProps
};

// --- JSXを返す関数コンポーネント ---
// これがReactコンポーネントの本体です。
// Propsを引数として受け取り、JSX（HTMLのような見た目のコード）を返します。

// TODO: 以下の要件を満たす UserProfile コンポーネントを完成させてください。
// 1. `<h1>` タグで、`name` を表示する。
// 2. `<p>` タグで、「Age: [age]」のように年齢を表示する。
// 3. `favoriteFood` が渡されている場合のみ、`<p>` タグで「Favorite: [favoriteFood]」と表示する。
//    渡されていない場合は、何も表示しない。

export const UserProfile: React.FC<UserProfileProps> = ({ name, age, favoriteFood }) => {
  return (
    <div>
      {/* ここにJSXを記述します */}
    </div>
  );
};

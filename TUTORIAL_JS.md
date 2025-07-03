# JavaScript & TypeScript ハンズオンチュートリアル

ようこそ！このチュートリアルへ。ここでは、React/Next.jsを使ったウェブ開発で特に重要となるJavaScriptとTypeScriptの基本を、手を動かしながら学んでいきます。

## 学習の進め方

1.  各パートの **イントロダクション（このファイル）** を読み、これから学ぶことの概要を理解します。
2.  `tutorial` フォルダにある、対応する `partX.ts` ファイルを開きます。
3.  ファイルの中にある `// TODO:` というコメントの指示に従って、コードを完成させます。
4.  ターミナルで `npm test partX` (例: `npm test part1`) を実行し、テストが通るか確認します。
5.  テストが `PASS` になったら成功です！次のパートへ進みましょう。

--- 

## Part 1: 変数と定数 (`const`, `let`)

プログラミングでは、数値や文字列などの「値」に名前を付けて、後で使えるように保存しておくことができます。この名前付きの入れ物が「変数」や「定数」です。

- `const` (定数): 一度入れたら中身を変えられない箱。安全なので、基本的にはこちらを使います。
- `let` (変数): 中身を後から変えることができる箱。どうしても必要な場合だけ使います。

**【例】**
```javascript
// 定数 universityName を定義
const universityName = "Next.js大学";

// 変数 score を定義
let score = 80;
// score は let で定義したので、後から値を変更できる
score = 85; 
```

**課題:** `tutorial/part1.ts` を開き、あなたの名前と年齢を定数と変数に代入してみましょう。

**テストコマンド:** `npm test part1`

---

## Part 2: 関数とアロー関数

「関数」とは、一連の処理をひとまとめにしたものです。同じ処理を何度も書きたいとき、関数として定義しておけば、短い名前で呼び出すだけで実行できます。

React開発では、この関数を使ってUIの部品（コンポーネント）を作ります。

近年では、より短くシンプルに書ける「アロー関数」という書き方が主流です。

**【例】**
```javascript
// 2つの数値を引き算する関数
function subtract(a, b) {
  return a - b;
}

// 掛け算をするアロー関数
const multiply = (a, b) => {
  return a * b;
};

// 呼び出し
const result1 = subtract(10, 3); // result1 は 7
const result2 = multiply(4, 5);  // result2 は 20
```

**課題:** `tutorial/part2.ts` を開き、簡単な計算をする関数と、挨拶を返すアロー関数を作ってみましょう。

**テストコマンド:** `npm test part2`

---

## Part 3: オブジェクトと配列

複雑なデータを扱うために、「オブジェクト」と「配列」は欠かせません。

- **オブジェクト**: 複数のデータを「キー」と「値」のペアで管理します。ユーザーのプロフィールのように、関連する情報をまとめるのに便利です。
- **配列**: 複数のデータを順番に並べて管理します。好きな食べ物のリストのように、同じ種類のものを集めるのに便利です。

**【例】**
```javascript
// オブジェクトの例
const book = {
  title: "JavaScript入門",
  price: 2500,
};
// ドット(.)で値にアクセス
console.log(book.title); // "JavaScript入門"

// 配列の例
const colors = ["red", "green", "blue"];
// インデックス(番号)で値にアクセス
console.log(colors[0]); // "red"
```

**課題:** `tutorial/part3.ts` を開き、あなたのプロフィールを表すオブジェクトと、好きな食べ物の配列を作ってみましょう。

**テストコマンド:** `npm test part3`

---

## Part 4: 配列の便利なメソッド (`.map`, `.filter`)

配列のデータを一つずつ取り出して、何か処理をしたい場面は非常によくあります。そんな時に便利なのが `.map()` と `.filter()` です。

- `.map()`: 配列の各要素を、指定したルールで新しい要素に変換し、新しい配列を作ります。ReactでデータのリストをUIに表示する際に必須のテクニックです。
- `.filter()`: 配列の各要素をチェックし、条件に合うものだけを集めた新しい配列を作ります。

**【例】**
```javascript
const names = ["alice", "bob", "carol"];

// .map() で、各名前を大文字にする
const upperNames = names.map(name => name.toUpperCase());
// upperNames は ["ALICE", "BOB", "CAROL"]

const scores = [88, 95, 70, 100, 60];

// .filter() で、90点以上のスコアだけを抜き出す
const highScores = scores.filter(score => score >= 90);
// highScores は [95, 100]
```

**課題:** `tutorial/part4.ts` を開き、`.map()` で数値リストを2倍に、`.filter()` で偶数だけを抜き出してみましょう。

**テストコマンド:** `npm test part4`

---

## Part 5: TypeScriptの基本的な型

TypeScriptは、JavaScriptに「型」の概念を追加したものです。型を指定することで、変数に意図しないデータが入ってしまうような間違いを、プログラムを実行する前にエディタが教えてくれます。これにより、バグが大幅に減り、開発がスムーズになります。

ここでは、関数の引数（受け取る値）と返り値（返す値）に型を付ける方法を学びます。

**【例】**
```typescript
// 引数 `name` は string型、返り値も string型
function sayGoodbye(name: string): string {
  return `Goodbye, ${name}!`;
}

// 引数 `price` と `quantity` は number型、返り値も number型
const calculateTotal = (price: number, quantity: number): number => {
  return price * quantity;
};
```

**課題:** `tutorial/part5.ts` を開き、指定された型の引数を受け取り、指定された型の値を返す関数を完成させましょう。

**テストコマンド:** `npm test part5`

---

## Part 6: (発展) 分割代入とスプレッド構文

これらは、オブジェクトや配列をより直感的に、そして簡潔に扱うためのテクニックです。Reactのコードでは頻繁に使われます。

- **分割代入**: オブジェクトや配列から、必要な値だけを簡単に取り出して変数に代入できます。
- **スプレッド構文 (`...`)**: オブジェクトや配列の全要素を展開して、新しいオブジェクトや配列を簡単に作ることができます。

**【例】**
```javascript
// 分割代入（オブジェクト）
const product = { id: "A-1", name: "イヤホン", price: 3000 };
const { name, price } = product;
console.log(name); // "イヤホン"
console.log(price); // 3000

// スプレッド構文（配列）
const fruits1 = ["apple", "banana"];
const fruits2 = ["orange", "grape"];
const allFruits = [...fruits1, ...fruits2];
// allFruits は ["apple", "banana", "orange", "grape"]
```

**課題:** `tutorial/part6.ts` を開き、分割代入でオブジェクトから値を取り出し、スプレッド構文で配列を合体させてみましょう。

**テストコマンド:** `npm test part6`

---

## Part 7: (発展) 型エイリアス、ユニオン型、オプショナルな型

TypeScriptを使いこなす上で重要な、さらに進んだ型のテクニックです。

- **型エイリアス (`type`)**: オブジェクトの型など、複雑な型に自分で名前を付けることができます。Reactコンポーネントが受け取るデータ（Props）の型を定義するのによく使います。
- **ユニオン型 (`|`)**: 「文字列または数値」のように、複数の型を許容したい場合に利用します。
- **オプショナルな型 (`?`)**: オブジェクトのプロパティで、あってもなくても良いものを定義できます。

**【例】**
```typescript
// 型エイリアスの例
type Product = {
  name: string;
  price: number;
};

// ユニオン型とオプショナルな型の例
function printValue(value: string | number, memo?: string) {
  console.log(`Value: ${value}`);
  if (memo) {
    console.log(`Memo: ${memo}`);
  }
}

printValue(100); // OK
printValue("Hello"); // OK
printValue("World", "This is a memo"); // OK
```

**課題:** `tutorial/part7.ts` を開き、これらの高度な型を使って、より柔軟な関数を実装してみましょう。

**テストコマンド:** `npm test part7`

---

## Part 8: JSX入門 - Reactコンポーネント

JSXは、JavaScriptの中にHTMLのようなコードを書いて、UIを表現するための技術です。React/Next.js開発の核となります。

見た目はHTMLに似ていますが、実際にはJavaScriptのオブジェクトに変換されます。これにより、UIの構造を宣言的かつ直感的に記述できます。

- **コンポーネント**: JSXを返す関数のこと。UIの部品として再利用できます。
- **Props**: 親コンポーネントから子コンポーネントへ渡されるデータ。`{}` を使ってJSX内に変数を埋め込めます。
- **条件分岐**: `&&` や三項演算子 `(condition ? a : b)` を使って、条件によって表示する内容を変えられます。

**【例】**
```tsx
// Propsの型定義
type GreetingProps = {
  name: string;
};

// コンポーネントの定義
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
};

// コンポーネントの利用
// <Greeting name="World" />
```

**課題:** `tutorial/part8.tsx` を開き、Propsを受け取ってユーザープロフィールを表示するReactコンポーネントを完成させましょう。

**テストコマンド:** `npm test part8`

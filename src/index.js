//テンプレート文字列を用いた方法
// const name = "じゃけぇ";
// const age = 28;

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

const myProfile = {
  name: "じゃけぇ",
  age: 28,
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;

console.log(message1);

const { name, age } = myProfile;

const message2 = `名前は${name}です。年齢は${age}歳です。`;

console.log(message2);

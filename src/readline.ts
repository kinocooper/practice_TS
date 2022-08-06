import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('文字列を入力してください：', (line) => {
  const num = Number(line);
  const result = num + 1000;
  console.log(result);
  rl.close();
});

const bigint = BigInt(5000);
console.log("bigint is", bigint);

const test: string = "abc";
console.log(`${test}`);

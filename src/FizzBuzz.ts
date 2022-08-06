// for文でループ　1～100まで　iインクリ
// if文 または switch文
// %15 が0でFizzBuzz
// 3 でFizz
// 5でBuzz
// それ以外はそのまま
// let i = 1;

let all_returns = "";
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
    all_returns += "FizzBuzz";
  } else if (i % 3 === 0) {
    console.log("Fizz");
    all_returns += "Fizz";
  } else if (i % 5 === 0) {
    console.log("Buzz");
    all_returns += "Buzz";
  } else {
    console.log(i);
    all_returns += String(i);
  }
  if (i < 100) {
    all_returns += " ";
  }
}
console.log(all_returns);
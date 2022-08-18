// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


// 数値からFizzBuzz判定してreturn
const getFizzBuzzString = (i: number): string => {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else {
    return i.toString();
  }
}

// for (let i = 1; i <= 100; i++) {
//   const message = getFizzBuzzString(i);
//   console.log(message);
// }

// minからmaxまでの配列を作ってreturn
const sequence = (min: number, max: number): number[] => {
  const arr: number[] = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

// 上記2つの関数を組み合わせてFizzBuzzを出力
for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
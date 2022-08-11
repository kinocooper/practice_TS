type User = {
  name: string;
  age: number;
  premiumUser: boolean;
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

// ここにコードを足す
// users という配列を用意
// CSVのデータは改行ごとにsplitして、1行ごとの内容を取得　→　仮の配列に入れる
// そいつをfor of で全要素出していき、空文字列の要素だけは無視してループ処理を進める
// コンマごとにsplitして、さらに仮の配列に入れる
// 各要素をそれぞれ変数の入れ替える。ここで分割代入の配列パターンを使う(使わなくてもできるけど)
// その上で、String型になってる各変数をUser型に合うよう型変換して、別の変数に入れる
// 最初に用意していたusers[]に、各変数をpushしていく。これでループ1週が終わり。

const users: User[] = [];

const lines = data.split('\n');

for (const line of lines) {
  if (line === "") {
    continue;
  }
  const [name, ageString, premiumUserString] = line.split(',');
  const age: number = Number(ageString);
  const premiumUser: boolean = premiumUserString === "1";

  users.push({
    name: name,
    age: age,
    premiumUser: premiumUser
  })
}


for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
  }
}
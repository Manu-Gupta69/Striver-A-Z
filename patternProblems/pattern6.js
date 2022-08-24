// 12345
// 1234
// 123
// 12
// 1

function printPattern6(row, col) {
  let globalAnswer = [];

  for (let i = row; i > 0; i--) {
    let ans = [];
    for (let j = 1; j <= i; j++) {
      ans.push(j);
    }
    globalAnswer.push(ans);
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern6(5, 5);

// 1
// 2 3
// 4 5 6
// 7 8 9 10

function printPattern13(row, col) {
  let global = 1;
  let globalAnswer = [];
  for (let i = 1; i <= row; i++) {
    let ans = [];
    for (let j = 1; j <= i; j++) {
      ans.push(global);
      global += 1;
    }
    globalAnswer.push(ans);
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern13(5, 5);

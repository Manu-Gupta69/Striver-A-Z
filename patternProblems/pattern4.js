//1
//22
//333
//4444
//55555

function printPattern4(row, col) {
  let globalAnswer = [];
  for (let i = 1; i <= row; i++) {
    let ans = [];
    for (let j = 1; j <= i; j++) {
      ans.push(i);
    }
    globalAnswer.push(ans);
  }
  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern4(5, 5);

//1
//12
//123
//1234
//12345
function printPattern3(row, col) {
  let globalAnswer = [];

  for (let i = 1; i <= row; i++) {
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

printPattern3(5, 5);

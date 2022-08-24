//  *****
//  *****
//  *****
//  *****

function printPatten1(row, col) {
  let globalAnswer = [];
  for (let i = 0; i < row; i++) {
    let ans = [];
    for (let j = 0; j < col; j++) {
      ans.push("*");
    }
    globalAnswer.push(ans);
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPatten1(5, 5);

// *
// **
// ***
// ****
// *****

function printPattern2(row, col) {
  let globalAnswer = [];

  for (let i = 0; i < row; i++) {
    let ans = [];
    for (let j = 0; j <= i; j++) {
      ans.push("*");
    }
    globalAnswer.push(ans);
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern2(5, 5);

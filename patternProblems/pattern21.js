// ****
// *  *
// *  *
// ****

function printPattern21(row, col) {
  let space = row - 2;
  let globalAnswer = [];

  for (let i = 1; i <= row; i++) {
    let ans = [];
    if (i == 1 || i == row) {
      for (let j = 1; j <= row; j++) {
        ans.push("*");
      }
    } else {
      ans.push("*");
      for (let j = 1; j <= space; j++) {
        ans.push(" ");
      }
      ans.push("*");
    }

    globalAnswer.push(ans);
  }
  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern21(4, 10);

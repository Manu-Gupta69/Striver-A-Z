// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function printPattern10(row, col) {
  let space = 1;
  let globalAnswer = [];

  for (let i = 1; i <= Math.floor(row / 2); i++) {
    let ans = [];
    for (let j = 1; j <= i; j++) {
      ans.push("*");
    }
    globalAnswer.push(ans);
  }
  for (let i = Math.floor(row / 2) - 1; i >= 1; i--) {
    let ans = [];
    for (let j = i; j >= 1; j--) {
      ans.push("*");
    }
    globalAnswer.push(ans);
  }
  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern10(10, 10);

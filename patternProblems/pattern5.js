// *****
// ****
// ***
// **
// *

function printPattern5(row, col) {
  let globalAnswer = [];
  for (let i = row; i > 0; i--) {
    let ans = [];
    for (let j = i; j > 0; j--) {
      ans.push("*");
    }
    globalAnswer.push(ans);
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern5(5, 5);

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

function printPattern19(row, col) {
  let space = 0;
  let number = Math.floor(row / 2);
  let globalAnswer = [];

  for (let i = 1; i <= row; i++) {
    let ans = [];

    for (let j = 1; j <= number; j++) {
      ans.push("*");
    }
    for (let j = 1; j <= space; j++) {
      ans.push(" ");
    }
    for (let j = 1; j <= number; j++) {
      ans.push("*");
    }
    globalAnswer.push(ans);
    if (i == Math.floor(row / 2)) continue;
    else if (i < Math.floor(row / 2)) {
      space += 2;
      number -= 1;
    } else {
      space -= 2;
      number += 1;
    }
  }
  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern19(10, 10);

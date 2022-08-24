// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

function printPattern12(row, col) {
  let space = row - 2;
  let globalAnswer = [];
  let increaseCount = 1;
  for (let i = 1; i <= row; i++) {
    let ans = [];
    for (let j = 1; j <= increaseCount; j++) {
      ans.push("*");
    }
    for (let j = 1; j <= space; j++) {
      ans.push(" ");
    }
    for (let j = 1; j <= increaseCount; j++) {
      ans.push("*");
    }
    if (i >= Math.floor(row / 2)) {
      space += 2;
      increaseCount -= 1;
    } else {
      increaseCount += 1;
      space -= 2;
    }

    globalAnswer.push(ans);
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern12(10, 5);

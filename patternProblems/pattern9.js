//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

function printPattern9(row, col) {
  let space = Math.floor(row / 2) - 1;
  let oddNumber = 1;
  let globalAnswer = [];

  for (let i = 1; i <= row; i++) {
    let ans = [];

    for (let j = 1; j <= space; j++) {
      ans.push(" ");
    }
    for (let j = 1; j <= oddNumber; j++) {
      ans.push("*");
    }
    globalAnswer.push(ans);
    if (i == Math.floor(row / 2)) continue;
    else if (i > Math.floor(row / 2)) {
      space += 1;
      oddNumber -= 2;
    } else {
      space -= 1;
      oddNumber += 2;
    }
  }
  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern9(10, 10);

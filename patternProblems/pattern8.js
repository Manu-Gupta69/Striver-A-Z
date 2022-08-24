// *********
//  *******
//   *****
//    ***
//     *

function printPatten8(row, col) {
  let globalAnswer = [];
  let space = 0;
  let oddNumber = row * 2 - 1;

  for (let i = 1; i <= row; i++) {
    let ans = [];
    for (let j = 1; j <= space; j++) {
      ans.push(" ");
    }
    for (let j = 1; j <= oddNumber; j++) {
      ans.push("*");
    }
    globalAnswer.push(ans);
    space += 1;
    oddNumber -= 2;
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPatten8(5, 5);

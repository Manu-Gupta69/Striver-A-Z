//     *
//    ***
//   *****
//  *******
// *********

function printPatttern7(row, col) {
  let globalAnswer = [];
  let space = row - 1;
  let oddNumber = 1;
  for (let i = 1; i <= row; i++) {
    let ans = [];
    for (let j = 1; j <= space; j++) {
      ans.push(" ");
    }
    for (let j = 1; j <= oddNumber; j++) {
      ans.push("*");
    }
    globalAnswer.push(ans);
    oddNumber += 2;
    space -= 1;
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPatttern7(5, 5);

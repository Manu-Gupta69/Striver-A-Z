// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321

function printPattern12(row, col) {
  let space = 2 * row - 2;
  let globalAnswer = [];
  for (let i = 1; i <= row; i++) {
    let ans = [];
    for (let j = 1; j <= i; j++) {
      ans.push(j);
    }
    for (let j = 1; j <= space; j++) {
      ans.push(" ");
    }
    for (let j = i; j >= 1; j--) {
      ans.push(j);
    }
    space -= 2;
    globalAnswer.push(ans);
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern12(5, 5);

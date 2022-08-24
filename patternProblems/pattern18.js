// E
// D E
// C D E
// B C D E
// A B C D E

function printPattern18(row, col) {
  let globalAnswer = [];
  let patternString = String.fromCharCode("A".charCodeAt(0) + row - 1);

  for (let i = 0; i < row; i++) {
    let startPattern = String.fromCharCode(patternString.charCodeAt(0) - i);
    let ans = [];
    for (let j = 0; j <= i; j++) {
      ans.push(startPattern);
      let next = startPattern.charCodeAt(0) + 1;
      startPattern = String.fromCharCode(next);
    }
    globalAnswer.push(ans);
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern18(5, 5);

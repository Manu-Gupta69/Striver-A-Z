// A
// A B
// A B C
// A B C D

function printPattern14(row, col) {
  let globalAnswer = [];
  for (let i = 1; i <= row; i++) {
    let ans = [];
    let patternString = "A";
    for (let j = 1; j <= i; j++) {
      ans.push(patternString);
      let next = patternString.charCodeAt(0) + 1;
      patternString = String.fromCharCode(next);
    }
    globalAnswer.push(ans);
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern14(5, 5);

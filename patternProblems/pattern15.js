// A B C E
// A B C
// A B
// A

function pattern15(row, col) {
  let globalAnswer = [];
  for (let i = row; i >= 1; i--) {
    let ans = [];
    let patternString = "A";
    for (let j = i; j >= 1; j--) {
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

pattern15(5, 5);

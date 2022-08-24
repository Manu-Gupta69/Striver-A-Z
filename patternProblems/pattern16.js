// A
// B B
// C C C
// D D D D

function pattern16(row, col) {
  let globalAnswer = [];
  let patternString = "A";
  for (let i = 1; i <= row; i++) {
    let ans = [];
    for (let j = 1; j <= i; j++) {
      ans.push(patternString);
    }
    let next = patternString.charCodeAt(0) + 1;
    patternString = String.fromCharCode(next);
    globalAnswer.push(ans);
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

pattern16(5, 5);

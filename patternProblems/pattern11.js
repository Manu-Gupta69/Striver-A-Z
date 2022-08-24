// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

function printPatttern11(row, col) {
  let globalAnswer = [];

  for (let i = 1; i <= row; i++) {
    let start = i % 2 ? 1 : 0;
    let ans = [];
    for (let j = 1; j <= i; j++) {
      ans.push(start);
      start = start ? 0 : 1;
    }
    globalAnswer.push(ans);
  }

  globalAnswer.forEach((element) => {
    console.log(...element);
  });
}

printPatttern11(5, 5);

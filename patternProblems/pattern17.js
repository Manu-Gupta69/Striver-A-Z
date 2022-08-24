//      A
//    A B A
//  A B C B A
//A B C D C B A

function printPattern17(row, col) {
  let globalAnswer = [];
  let space = row - 1;
  let oddNumber = 1;
  for (let i = 1; i <= row; i++) {
    let ans = [];
    let patternString = "A";

    for (let j = 1; j <= space; j++) {
      ans.push(" ");
    }
    for (
      let ptr1 = ans.length, ptr2 = ans.length + oddNumber - 1;
      ptr1 <= ptr2;
      ptr1++, ptr2--
    ) {
      ans[ptr1] = patternString;
      ans[ptr2] = patternString;

      let next = patternString.charCodeAt(0) + 1;
      patternString = String.fromCharCode(next);
    }

    globalAnswer.push(ans);
    oddNumber += 2;
    space -= 1;
  }

  globalAnswer.forEach((item) => {
    console.log(...item);
  });
}

printPattern17(5, 5);

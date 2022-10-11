// Find the longest substring without repeating characters
function withoutReapingChar(inputedString, resultString) {
  let map1 = {};
  let i = -1,
    j = -1;
  let output = 0;

  while (true) {
    let bool1 = false;
    let bool2 = false;

    while (i < inputedString.length - 1) {
      bool1 = true;
      i += 1;
      if (map1[inputedString[i]] > 0) map1[inputedString[i]] += 1;
      else {
        map1[inputedString[i]] = 1;
      }
      if (map1[inputedString[i]] == 2) {
        break;
      } else {
        // calculate Answer
        output = Math.max(output, i - j);
      }
      bool1 = true;
    }

    while (j < i) {
      bool2 = true;
      j += 1;
      if (map1[inputedString[j]] <= 1) {
        delete map1[inputedString[j]];
      } else {
        map1[inputedString[j]] -= 1;
      }
      if (map1[inputedString[j]] == 1) {
        break;
      }
    }

    if (!bool1 && !bool2) break;
  }
  return output;
}

withoutReapingChar();

//Find minimum window in an array such that such that all chars of that

function minWindowSubstring(inputedString, resultString) {
  let ipoint = -1;
  let jpoint = -1;
  let map2 = {};
  for (let i of resultString) {
    if (map2[i] > 0) map2[i] += 1;
    else map2[i] = 1;
  }
  let map1 = {};
  let runningCount = 0;
  let desiredCount = resultString.length;
  let output = Number.MAX_SAFE_INTEGER;
  let i = -1,
    j = -1;

  while (true) {
    let bool1 = false;
    let bool2 = false;
    while (i < inputedString.length - 1 && runningCount < desiredCount) {
      i += 1;
      if (map1[inputedString[i]] > 0) map1[inputedString[i]] += 1;
      else map1[inputedString[i]] = 1;
      if (map1[inputedString[i]] <= map2[inputedString[i]]) runningCount += 1;
      bool1 = true;
    }

    while (j < i && runningCount == desiredCount) {
      let len = i - j + 1;
      if (len < output) {
        output = len;
        ipoint = i;
        jpoint = j;
      }
      output = Math.min(output, i - j + 1);
      j += 1;
      if (map1[inputedString[j]] > 0) {
        map1[inputedString[j]] -= 1;
        if (map1[inputedString[j]] < map2[inputedString[j]]) runningCount -= 1;
      }
      if (map1[inputedString[j]] == 0) delete map1[inputedString[j]];
      bool2 = true;
    }
    if (!bool1 && !bool2) break;
  }

  return inputedString.substring(jpoint + 1, ipoint + 1);
}

let answer = minWindowSubstring();
console.log(answer);

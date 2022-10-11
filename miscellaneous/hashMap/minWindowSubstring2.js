// Get unique characters of minimum window substring

function getCharacter(inputedString, resultString) {
  let map1 = {};
  let map2 = {};
  let i = -1,
    j = -1;
  let mapCount = 0;
  let runningCount = 0;
  for (let char of inputedString) {
    if (map2[char] > 0) map2[char] += 1;
    else {
      mapCount += 1;
      map2[char] = 1;
    }
  }

  while (true) {
    let bool1 = false;
    let bool2 = false;
    while (i < inputedString.length - 1 && runningCount < mapCount) {
      if (map1[inputedString[i]] > 0) {
        map1[inputedString[i]] += 1;
      } else {
        map1[inputedString[i]] += 1;
        runningCount += 1;
      }
      bool1 = true;
    }
    while (j < i && runningCount == mapCount) {
      output = Math.min(output, i - j);
      j += 1;
      if (map1[inputedString[j]] <= 1) {
        delete map1[inputedString[j]];
        runningCount -= 1;
      } else {
        map1[inputedString[j]] -= 1;
      }
      bool2 = true;
    }
    if (!bool1 && !bool2) break;
  }
}

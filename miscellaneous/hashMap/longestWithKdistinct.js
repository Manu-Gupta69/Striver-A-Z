//Find the longest substring with k distinct charcters

function distinctChar(inputedString, k) {
  let map = {};
  let i = -1,
    j = -1;
  let output = 0;
  let runningCount = 0;
  while (true) {
    let bool1 = false;
    let bool2 = false;

    while (i < inputedString.length - 1) {
      bool1 = true;
      i += 1;
      if (map.hasOwnProperty(inputedString[i])) map[inputedString[i]] += 1;
      else {
        map[inputedString[i]] = 1;
        runningCount += 1;
      }
      if (runningCount > k) {
        break;
      } else if (runningCount == k) {
        console.log(i, j);
        output = Math.max(output, i - j);
      }
    }
    console.log("before");
    console.log(map);
    console.log("-----------------");

    while (j < i) {
      bool2 = true;
      j += 1;
      if (map[inputedString[j]] == 1) {
        delete map[inputedString[j]];
        runningCount -= 1;
      } else {
        map[inputedString[j]] -= 1;
      }
      if (runningCount <= k) break;
    }
    console.log(map);
    if (!bool1 && !bool2) break;
  }
  return output;
}

let ans = distinctChar("aabacbebebe", 3);
console.log(ans);

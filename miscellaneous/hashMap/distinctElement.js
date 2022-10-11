//Count distinct element in every window of size k

function distinctElement(arr, k) {
  let map = {};
  let mapSize = 0;
  for (let i = 0; i < k - 1; i++) {
    if (map[arr[i]] > 0) map[arr[i]] += 1;
    else {
      map[arr[i]] = 1;
      mapSize += 1;
    }
  }

  let accquireIndex = k - 2,
    releaseIndex = -1;
  let maxDistinct = 0;
  let output = [];

  while (accquireIndex < arr.length - 1) {
    accquireIndex += 1;
    if (map[arr[accquireIndex]] > 0) map[arr[accquireIndex]] += 1;
    else {
      map[arr[accquireIndex]] = 1;
      mapSize += 1;
    }

    let distinctElementSize = mapSize;
    output.push(distinctElementSize);
    maxDistinct = Math.max(maxDistinct, distinctElementSize);

    releaseIndex += 1;
    if (map[arr[releaseIndex]] <= 1) {
      delete map[arr[releaseIndex]];
      mapSize -= 1;
    } else map[arr[releaseIndex]] -= 1;
  }
  return { maxDistinct, output };
}
let ans = distinctElement([1, 2, 1, 3, 4, 2, 3], 4);
console.log(ans.maxDistinct);
console.log(ans.output);

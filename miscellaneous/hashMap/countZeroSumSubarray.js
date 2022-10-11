//Count zero sum subarray

function countZeroSumSubarray(arr) {
  let startIndex = 0;
  let sum = 0;
  let map = {};
  let count = 0;
  map[0] = 1;
  while (startIndex < arr.length) {
    sum += arr[startIndex];

    if (map[sum] > 0) {
      count += map[sum];
      map[sum] += 1;
    } else {
      map[sum] = 1;
    }
    startIndex += 1;
  }

  return count;
}

let ans = countZeroSumSubarray([0, 0, 5, 5, 0, 0]);
console.log(ans);

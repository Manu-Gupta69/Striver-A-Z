// Find the largest subarray which has sum zero
function zeroSumSubarray(arr) {
  let i = 0;
  let map = {};
  map[0] = -1;
  let sum = 0;
  let longestSubArr = 0;
  while (i < arr.length) {
    sum += arr[i];
    console.log(sum);
    if (map.hasOwnProperty(sum)) {
      longestSubArr = Math.max(longestSubArr, i - map[sum]);
    } else {
      map[sum] = i;
    }

    i += 1;
  }
  return longestSubArr;
}
let ans = zeroSumSubarray([-1, 1, -1, 1]);
console.log(ans);

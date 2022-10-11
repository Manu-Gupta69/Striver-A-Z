function checkPalindrome(arr) {
  let startIndex = 0;
  function check(idx1, idx2, arr) {
    return arr[idx1] === arr[idx2];
  }
  function helper(idx, arr) {
    if (idx < Math.floor(arr.length / 2)) return true;
    if (!check(idx, startIndex, arr)) return false;
    startIndex += 1;
    return helper(idx - 1, arr);
  }
  let ans = helper(arr.length - 1, arr);
  console.log(ans);
}

checkPalindrome([1, 2, 1, 1, 1]);

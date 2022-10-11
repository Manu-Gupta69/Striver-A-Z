function reverseArray(arr) {
  let startIndex = 0;
  function swap(idx1, idx2, arr) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  function helper(idx, arr) {
    if (idx < Math.floor(arr.length / 2)) return;
    swap(idx, startIndex, arr);
    startIndex += 1;
    helper(idx - 1, arr);
  }
  helper(arr.length - 1, arr);
  console.log(arr);
}
reverseArray([1, 2, 3, 4]);

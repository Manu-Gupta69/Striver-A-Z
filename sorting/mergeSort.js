let arr = [1, 3, 5, 2, 4];

function merge(arr1, arr2) {
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  let newTempArr = [];

  while (leftArrIndex < arr1.length && rightArrIndex < arr2.length) {
    if (arr1[leftArrIndex] < arr2[rightArrIndex]) {
      newTempArr.push(arr1[leftArrIndex]);
      leftArrIndex += 1;
    } else {
      newTempArr.push(arr2[rightArrIndex]);
      rightArrIndex += 1;
    }
  }
  while (leftArrIndex < arr1.length) {
    newTempArr.push(arr1[leftArrIndex]);
    leftArrIndex += 1;
  }
  while (rightArrIndex < arr2.length) {
    newTempArr.push(arr2[rightArrIndex]);
    rightArrIndex += 1;
  }
  return newTempArr;
}
function mergeSort(arr) {
  if (arr.length == 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, mid));
  let rightArr = mergeSort(arr.slice(mid));
  return merge(leftArr, rightArr);
}

console.log(mergeSort(arr));

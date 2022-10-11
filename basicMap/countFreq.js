//Counting frequency of array element

function countFreq(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map.hasOwnProperty(arr[i])) map[arr[i]] += 1;
    else map[arr[i]] = 1;
  }
  console.log(map);
}
countFreq([1, 2, 3, 1, 1, 2, 4, 5]);

//Counting frequency of array elements

function countFreq(arr) {
  let map = {};
  let highest = Number.MIN_SAFE_INTEGER;
  let lowest = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (map.hasOwnProperty(arr[i])) {
      map[arr[i]] += 1;
      highest = Math.max(map[arr[i]], highest);
      lowest = Math.min(map[arr[i]], lowest);
    } else {
      map[arr[i]] = 1;
      highest = Math.max(map[arr[i]], highest);
      lowest = Math.min(map[arr[i]], lowest);
    }
  }
  console.log(map);
  console.log("Highest -->", highest);
  console.log("Lowest -->", lowest);
}
countFreq([1, 2, 3, 1, 1, 2, 4, 5]);

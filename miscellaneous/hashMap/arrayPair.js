// Check if array pair is divisble by k
// Can we make pairs in array such that all they are divided by k

function checkPairs(arr, k) {
  let map = {};
  for (let value of arr) {
    let rem = value % k;
    if (!map.hasOwnProperty(rem)) {
      map[rem] = 1;
    } else {
      map[rem] += 1;
    }
  }

  for (let value of arr) {
    let rem = value % k;
    if (rem == 0 && map[rem] % 2 != 0) return false;
    else if (2 * rem == k && map[rem] % 2 != 0) return false;
    else if (map[rem] !== map[k - rem]) {
      return false;
    }
  }
  return true;
}

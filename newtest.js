let string = "aaaabbbbccccddee";
let map = {};
for (let element of string) {
  if (!map.hasOwnProperty(element)) {
    map[element] = 1;
  } else {
    map[element] += 1;
  }
}
let map2 = {};
let count = 0;
for (let key in map) {
  if (map2.hasOwnProperty(map[key])) {
    map2[map[key]] += 1;
  } else {
    map2[map[key]] = 1;
  }
}
for (let key in map2) {
  if (map2[key] > 1) {
    count += Math.ceil(map2[key] / 2);
  }
}
console.log(count);
console.log(map2);

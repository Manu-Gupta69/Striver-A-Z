//Find all anagram in a string
// s- > source , p-> pattern
function findAllAnagram(s, p) {
  let mapP = {};
  let mapS = {};
  let size = 0;
  function compare(mapS, mapP) {
    for (let key in mapS) {
      if (!mapP.hasOwnProperty(key)) {
        return false;
      } else if (mapS[key] !== mapP[key]) return false;
    }
    return true;
  }

  for (let i = 0; i < p.length; i++) {
    if (mapP[p[i]] > 0) {
      mapP[p[i]] += 1;
      size += 1;
    } else {
      size += 1;
      mapP[p[i]] = 1;
    }
  }

  for (let i = 0; i < size - 1; i++) {
    if (mapS[s[i]] > 0) {
      mapS[s[i]] += 1;
    } else {
      mapS[s[i]] = 1;
    }
  }
  let j = 0;
  let output = [];

  //console.log(mapS , mapP)

  for (let i = size - 1; i < s.length; i++) {
    //accquire
    if (mapS.hasOwnProperty(s[i])) {
      mapS[s[i]] += 1;
    } else {
      mapS[s[i]] = 1;
    }
    if (compare(mapS, mapP)) {
      output.push(j);
    }
    //release
    if (mapS[s[j]] == 1) delete mapS[s[j]];
    else mapS[s[j]] -= 1;
    j++;
  }
  return output;
}

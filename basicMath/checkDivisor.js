function checkDivisor(number) {
  let ans = [];
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      ans.push(i);
      if (i !== Math.floor(number / i)) ans.push(Math.floor(number / i));
    }
  }
  return ans;
}
let returnedAns = checkDivisor(36);
console.log(returnedAns);

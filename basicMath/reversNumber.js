function reverseNumber(number) {
  let reverseNumber = 0;
  while (number > 0) {
    let last = number % 10;
    reverseNumber = last + reverseNumber * 10;
    number = Math.floor(number / 10);
  }
  return reverseNumber;
}
let ans = reverseNumber(1234);
console.log(ans);

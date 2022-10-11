function checkPalindrome(number) {
  let reverse = reverseNumber(number);
  return number == reverse;
}

function reverseNumber(number) {
  let reverseNumber = 0;
  while (number > 0) {
    let last = number % 10;
    reverseNumber = last + reverseNumber * 10;
    number = Math.floor(number / 10);
  }
  return reverseNumber;
}

let ans = checkPalindrome(121);
console.log(ans);

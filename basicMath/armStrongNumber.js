function armStrongNumber(number) {
  let preserve = number;
  let armNumber = 0;
  while (number > 0) {
    let last = number % 10;
    armNumber = Math.pow(last, 3) + armNumber;
    number = Math.floor(number / 10);
  }

  return armNumber == preserve;
}

let ans = armStrongNumber(153);
console.log(ans);

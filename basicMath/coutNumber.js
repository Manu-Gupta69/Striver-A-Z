function countNumber(number) {
  let output = 0;
  while (number > 0) {
    output += 1;
    number = Math.floor(number / 10);
  }
  return output;
}

let answer = countNumber(1234);
console.log(answer);

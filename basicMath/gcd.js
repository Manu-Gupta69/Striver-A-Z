function gcd(a, b) {
  if (b == 0) return a;

  return gcd(b, a % b);
}

let answer = gcd(10, 8);
console.log(answer);

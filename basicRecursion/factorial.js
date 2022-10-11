//Function of factorial of N numbers

function factorial(N) {
  function helper(idx) {
    if (idx == 1) return 1;
    return idx * helper(idx - 1);
  }
  console.log(helper(N));
}
factorial(5);

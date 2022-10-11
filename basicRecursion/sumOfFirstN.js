//Function of Sum of first N numbers

function sum(N) {
  function helper(idx, sum) {
    if (idx > N) return sum;
    return helper(idx + 1, sum + idx);
  }
  console.log(helper(1, 0));
}
sum(5);

// Recursive Function to get Nth Fibonacci Number

function fib(N) {
  function helper(idx) {
    if (idx <= 1) return 1;
    return helper(idx - 1) + helper(idx - 2);
  }
  let ans = helper(N);
  console.log(ans);
}
fib(4);

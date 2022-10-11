//Function to print N using recursion

function printN(N) {
  function helper(idx) {
    if (idx > N) return;
    console.log(idx);
    helper(idx + 1);
  }
  helper(1);
}

printN(10);

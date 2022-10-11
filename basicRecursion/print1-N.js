//Function Print to 1-N and N-1 using recursion

function print(N, isReversePrinting) {
  function helper(idx, isReversePrinting) {
    if (idx > N) return;
    if (!isReversePrinting) console.log(idx);
    helper(idx + 1, isReversePrinting);
    if (isReversePrinting) console.log(idx);
  }
  helper(1, isReversePrinting);
}
print(5, false);

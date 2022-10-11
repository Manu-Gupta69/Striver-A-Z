function printName(name, N) {
  function helper(idx) {
    if (idx > N) return;
    console.log(name);
    helper(idx + 1);
  }
  helper(1);
}
printName("CoderBiceps", 10);




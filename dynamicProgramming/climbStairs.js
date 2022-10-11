// Number of ways to climb nth stair
let dp = [];
function climb(idx) {
  if (idx == 0) return 1;
  if (idx == 1) return 1;
  if (dp[idx] !== -1) return dp[idx];
  return (dp[idx] = climb(idx - 1) + climb(idx - 2));
}

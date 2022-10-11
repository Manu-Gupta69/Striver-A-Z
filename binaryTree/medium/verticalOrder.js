//Function to print vertical order traversal of binary tree

function verticalOrder(node, runningIndex, ans) {
  if (node == null) return ans;

  if (!ans.hasOwnProperty(runningIndex)) {
    ans[runningIndex] = [];
  }
  ans[runningIndex].push(node.val);

  verticalOrder(node.left, runningIndex - 1, ans);
  verticalOrder(node.right, runningIndex + 1, ans);
  return ans;
}

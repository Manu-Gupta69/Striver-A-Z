//Print the top view of the binary tree

function topView(node, runningIndex, ans) {
  if (node == null) return;

  if (!ans.hasOwnProperty(runningIndex)) {
    ans[runningIndex] = node.val;
  }
  topView(node.left, runningIndex - 1, ans);
  topView(node.right, runningIndex + 1, ans);
  return ans;
}
topView(root, 0, {});

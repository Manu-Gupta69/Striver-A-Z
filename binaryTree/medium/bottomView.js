//Print bottom view of binary tree

function bottomView(node, runningIndex, ans) {
  if (node == null) return;

  ans[runningIndex] = node.val;
  bottomView(node.left, runningIndex - 1, ans);
  bottomView(node.right, runningIndex + 1, ans);
  return ans;
}
bottomView(root, 0, {});

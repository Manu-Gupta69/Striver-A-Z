//Print Right / Left View of the binary tree

function rightView(node, ans, size, level) {
  if (node == null) return;

  if (size == level) {
    ans[level] = node.val;
    size += 1;
  }
  rightView(node.right, ans, size, level + 1);
  rightView(node.left, ans, size, level + 1);
  return ans;
}

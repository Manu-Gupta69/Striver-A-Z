// Find height of binary tree

function findHeight(node) {
  if (node == null) return 0;
  let left = findHeight(node.left);
  let right = findHeight(node.right);
  return 1 + Math.max(left, right);
}

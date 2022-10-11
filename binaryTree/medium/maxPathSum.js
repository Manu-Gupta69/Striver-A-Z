function maxPathSum(node) {
  if (node == null) return 0;
  let left = maxPathSum(node.left);
  let right = maxPathSum(node.right);

  return node.val + Math.max(left, right);
}

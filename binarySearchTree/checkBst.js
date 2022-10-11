// Check if tree is binary search tree or not

function checkTree(node, lowerLimit, upperLimit) {
  if (node == null) return true;
  return (
    checkTree(node.left, lowerLimit, node.val) &&
    checkTree(node.right, node.val, upperLimit)
  );
}
checkTree(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

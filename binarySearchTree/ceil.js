// Find the next greater number in BST (Ceil Value)

function ceil(target) {
  let ceil = -1;
  while (node) {
    if (target == node.val) {
      return target;
    }
    if (target > node.val) {
      node = node.right;
    } else {
      ceil = node.val;
      node = node.left;
    }
  }
  return ceil;
}

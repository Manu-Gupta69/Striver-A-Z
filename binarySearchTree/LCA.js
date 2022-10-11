// Find the lowest common ancestor in binary search tree

function lca(node, val1, val2) {
  if (node == null) return null;
  if (node.val > val1 && node.val > val2) {
    return lca(node.left);
  } else if (node.val < val1 && node.val < val2) {
    return lca(node.right);
  } else {
    return node.val;
  }
}

// Find the lowest common ancestor of binary tree

function lca(node, val1, val2) {
  if (node == null) return null;

  if (node.val == val1 || node.val == val2) return node;

  let left = lca(node.left, val1, val2);

  let right = lca(node.right, val1, val2);

  if (left && right) return node;
  else if (left) return left;
  else return right;
}
lca(root, p.val, q.val);

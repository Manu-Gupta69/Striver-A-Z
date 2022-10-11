// Insert a node in a given binary tree

function insert(node, nodeToInsert) {
  if (node == null) return nodeToInsert;

  if (node.val > nodeToInsert.val) {
    node.left = insert(node.left);
  } else {
    node.right = insert(node.right);
  }
  return node;
}

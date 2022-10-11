// Delete a node from a binary search tree\

function deleteNode(target) {
  if (root == target) {
    return helper(root);
  }
  while (node !== null) {
    if (node.val > target) {
      if (node.left !== null && node.left.val == target) {
        node.left = helper(node.left);
      } else {
        node = node.left;
      }
    } else {
      if (node.right !== null && node.right.val == target) {
        node.right = helper(node.right);
      } else {
        node = node.right;
      }
    }
  }
}

function helper(node) {
  if (node.left == null) return node.right;
  else if (node.right == null) return node.left;

  let rightNode = node.right;
  let rightMostNode = getRigthMostNode(node.left);

  rightMostNode.right = rightNode;
  return node.left;
}
function rightMostNode(node) {
  while (node.right != null) {
    node = node.right;
  }
  return node;
}

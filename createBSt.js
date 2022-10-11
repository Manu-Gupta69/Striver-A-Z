let root = null;

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function insert(node, insertvalue) {
  if (root == null) {
    root = new TreeNode(insertvalue, null, null);
    return;
  }

  if (node == null) {
    return new TreeNode(insertvalue, null, null);
  }

  if (node.val > insertvalue) node.left = insert(node.left, insertvalue);
  if (node.val < insertvalue) node.right = insert(node.right, insertvalue);

  return node;
}
let preorder = [1, 8, 9, 15, 20, 45, 36];
for (let value of preorder) {
  insert(root, value);
}

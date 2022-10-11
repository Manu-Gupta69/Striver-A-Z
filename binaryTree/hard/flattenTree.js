// Flatten binary tree to singly LinkList
let prev = null;
function flatten(node) {
  if (node === null) return;

  flatten(node.right);
  flatten(node.left);

  node.left = null;
  node.right = prev;
  prev = node;
}

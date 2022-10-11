//Recursive Binary Tree Traversals

//PREORDER TRAVERSAL
function preOrder(node, arr) {
  if (node == null) return;
  node.push(node.val);
  if (node.left) preOrder(node.left, arr);
  if (node.right) preOrder(node.right, arr);
}

//INORDER TRAVERSAL
function inOrder(node, arr) {
  if (node == null) return;
  if (node.left) inOrder(node.left, arr);
  arr.push(node.val);
  if (node.right) inOrder(node.right, arr);
}

//POSTORDER TRAVERSAL
function postOrder(node, arr) {
  if (node == null) return;
  if (node.left) postOrder(node.left, arr);
  if (node.right) postOrder(node.right, arr);
  arr.push(node.val);
}

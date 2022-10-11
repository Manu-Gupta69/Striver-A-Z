//Kth largest and smallest element in binary search tree

function kthLargestAndSmallest(root) {
  let inorder = getInorder(root, []);
  return inorder[inorder.length - k];
}
function getInorder(node, arr) {
  if (node == null) return;

  getInorder(node.left, arr);
  arr.push(node.val);
  getInorder(node.right, arr);
  return arr;
}

// Check if the binary tree is symmetric or not

function checkSymmetic(node1, node2) {
  if (node1 == null || node2 == null) return node1 == node2;
  if (node1.val !== node2.val) return false;

  return (
    checkSymmetic(node1.left, node2.right) &&
    checkSymmetic(node1.right, node2.left)
  );
}

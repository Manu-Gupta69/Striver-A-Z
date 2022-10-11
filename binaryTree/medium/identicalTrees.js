//Check if two trees are identical or not

function checkIdentical(tree1node, tree2node) {
  if (tree1node == null || tree2node == null) return tree1node == tree2node;
  if (tree1node.val !== tree2node.val) return false;

  return (
    checkIdentical(tree1node.left, tree2node.left) &&
    checkIdentical(tree1node.right, tree2node.right)
  );
}

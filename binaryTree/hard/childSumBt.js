// Convert binary tree to follow child sum property

function childSumProperty(node) {
  if (node == null) return;

  let childSum = 0;
  if (node.left) {
    childSum += node.left.data;
  }
  if (node.right) {
    childSum += node.right.data;
  }

  if (childSum < node.data) {
    if (node.left) node.left.data = node.data;
    if (node.right) node.right.data = node.data;
  } else {
    node.data = childSum;
  }
  childSumProperty(node.left);
  childSumProperty(node.right);

  childSum = 0;
  if (node.left) childSum += node.left.data;
  if (node.right) childSum += node.right.data;

  if (node.data < childSum) node.data = childSum;
}
childSumProperty(node);

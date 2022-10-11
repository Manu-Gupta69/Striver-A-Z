//Check if tree is heigth balanced or not

function heightBalanced(node) {
  if (node == null) return 0;

  let left = heightBalanced(node.left);
  if (left == -1) return -1;
  let right = heightBalanced(node.right);

  if (Math.abs(left - right) > 1) {
    return -1;
  }
  return 1 + Math.max(left, right);
}

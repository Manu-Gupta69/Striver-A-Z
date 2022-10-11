// Find next smaller number in a binary tree

function findFloor(target) {
  let value = -1;
  while (node) {
    if (node.val == target) return target;
    else if (node.val > target) {
      node = node.left;
    } else {
      value = node.val;
      node = node.right;
    }
  }
  return value;
}

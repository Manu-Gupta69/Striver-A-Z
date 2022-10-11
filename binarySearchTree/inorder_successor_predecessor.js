// Inorder successor / predecessor in a binary search tree

function successor(node, target) {
  let suc = 0;
  while (node !== null) {
    if (node.val <= target) {
      node = node.right;
    } else {
      suc = node.val;
      node = node.left;
    }
  }
  return suc;
}

function predecessor(node, target) {
  let pre = 0;
  while (node !== null) {
    if (node.val >= target) {
      node = node.left;
    } else {
      pre = node.val;
      node = node.right;
    }
  }
  return pre;
}

//LEVEL ORDER Traversal

function levelOrder(root) {
  if (!root) return [];
  let queue = [];
  let traversalOutput = [];
  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    let lvl = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      lvl.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    traversalOutput.push(lvl);
  }
  return traversalOutput;
}

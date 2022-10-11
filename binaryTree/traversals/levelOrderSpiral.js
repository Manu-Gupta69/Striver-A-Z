//LEVELORDER SPIRAL Traversal

function lvlSpiral(root) {
  if (!root) return [];
  let queue = [];
  let traversalOutput = [];
  let spiralSwitch = 1;
  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    let lvl = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (spiralSwitch) {
        lvl.push(node.val);
      } else {
        lvl.unshift(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    spiralSwitch = spiralSwitch ? 0 : 1;
    traversalOutput.push(lvl);
  }
  return traversalOutput;
}

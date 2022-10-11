//Level order traversal of binary tree

function levelOrder(node) {
  let queue = [];
  queue.push(node);
  let final = [];

  while (queue.length) {
    let size = queue.length;
    let ans = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      ans.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    final.push(ans);
  }
  return final;
}

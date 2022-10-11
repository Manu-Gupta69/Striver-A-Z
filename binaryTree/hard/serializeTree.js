// Serialize Deserialize Binary Tree

var serialize = function (root) {
  let arr = [];
  let q = [];
  if (root == null) return "";
  q.push(root);
  arr.push(root.val);
  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      if (node == null) continue;

      if (node.left) {
        q.push(node.left);
        arr.push(node.left.val);
      } else {
        arr.push("#");
      }
      if (node.right) {
        q.push(node.right);
        arr.push(node.right.val);
      } else {
        arr.push("#");
      }
    }
  }
  return arr.join("$");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data.length) return null;

  let q = [];
  let dataArr = data.split("$");
  console.log(dataArr);
  let idx = 0;
  let newnode = new TreeNode(dataArr[idx]);
  q.push(newnode);
  while (q.length) {
    let parentNode = q.shift();
    idx += 1;
    let leftvalue = dataArr[idx];
    idx += 1;
    let rightvalue = dataArr[idx];
    let leftnode, rightnode;
    if (leftvalue !== "#") {
      leftnode = new TreeNode(parseInt(leftvalue));
      q.push(leftnode);
    } else leftnode = null;

    if (rightvalue !== "#") {
      rightnode = new TreeNode(parseInt(rightvalue));
      q.push(rightnode);
    } else rightnode = null;

    parentNode.left = leftnode;
    parentNode.right = rightnode;
  }

  return newnode;
};

//Print node to root path in binary tree

function nodePath(node, path, value) {
  if (node == null) return false;

  path.push(node.value);
  if (node.value == value) {
    return true;
  }
  if (nodePath(node.left, path, value) && nodePath(node.right, path, value))
    return true;
  path.pop();
  return false;
}

let path = [];
nodePath(root, path, value);

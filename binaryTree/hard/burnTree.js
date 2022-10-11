// Minimum time to burn binary tree from a given node

//Print node at K distance in binary tree

function addParents(root) {
  let q = [];
  q.push(root);

  while (q.length) {
    let node = q.shift();

    if (node.left) {
      node.left.parent = node;
      q.push(node.left);
    }
    if (node.right) {
      node.right.parent = node;
      q.push(node.right);
    }
  }
}

addParents(root);

function burn(root) {
  let q = [];
  let visited = {};
  let time = 0;
  q.push(root);
  visited[root.val] = true;
  while (q.length) {
    let flag = false;
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let node = q.shift();

      if (node.left && !visited[node.left.val]) {
        q.push(node.left);
        flag = true;
        visited[node.left.val] = true;
      }
      if (node.right && !visited[node.right.val]) {
        q.push(node.right);
        flag = true;
        visited[node.right.val] = true;
      }
      if (node.parent && !visited[node.parent.val]) {
        q.push(node.parent);
        flag = true;
        visited[node.parent.val] = true;
      }
    }
    if (flag) time += 1;
  }
  return time;
}

let ans = burn(target);

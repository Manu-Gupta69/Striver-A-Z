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

function nodesAtk(root) {
  let q = [];
  let visited = {};
  q.push(root);
  visited[root.val] = true;
  let distance = 0;

  while (q.length) {
    let size = q.length;
    if (distance == k) break;
    for (let i = 0; i < size; i++) {
      let node = q.shift();

      if (node.left && !visited[node.left.val]) {
        q.push(node.left);
        visited[node.left.val] = true;
      }
      if (node.right && !visited[node.right.val]) {
        q.push(node.right);
        visited[node.right.val] = true;
      }
      if (node.parent && !visited[node.parent.val]) {
        q.push(node.parent);
        visited[node.parent.val] = true;
      }
    }
    distance += 1;
  }

  return q;
}

let ans = nodesAtk(target);

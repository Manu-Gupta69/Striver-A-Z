//Depth first search traversal Graph

function dfs() {
  let visted = {};

  function helper(node, visited) {
    visited[node] = true;
    dfsAnswer.push(node);
    for (let neighbour of node) {
      if (!visited[neighbour]) {
        helper(neighbour, visited);
      }
    }
  }
  helper(0, visted);
}

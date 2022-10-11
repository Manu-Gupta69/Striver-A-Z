function topoSort(src) {
  let visited = {};
  let topoStack = [];
  function helper(node) {
    visited[node] = true;
    for (let neighbour of node) {
      if (!visited[neighbour]) dfs(neighbour);
    }
    topoStack.push(node);
  }
  helper(src);
  return topoStack;
}

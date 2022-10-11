//Detect cycle in an Undirected graph using DFS

function detectCycle() {
  function helperDfs(node, parent) {
    visited[node] = true;

    for (let neighbour of node) {
      if (!visited[neighbour]) {
        if (helperDfs(neighbour, node)) return true;
      } else if (neighbour !== parent) {
        return true;
      }
    }
    return false;
  }
  helperDfs(src, -1);
}

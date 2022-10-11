//Number of provinces in graph

function provinces() {
  let visited = {};
  let count = 0;
  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      dfs(i, visited);
      count += 1;
    }
  }
  return count;
}

function dfs(node, visited) {
  visited[node] = true;
  for (let neighbour of node) {
    if (!visited[neighbour]) {
      dfs(neighbour, visited);
    }
  }
}

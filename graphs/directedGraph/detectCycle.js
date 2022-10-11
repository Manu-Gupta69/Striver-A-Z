function detectCycle() {
  let visited = {};
  let cycleVisited = {};

  function helper(node) {
    visited[node] = true;
    cycleVisited[node] = true;

    for (let neighbour of node) {
      if (!visited[neighbour]) {
        if (helper(neighbour)) return true;
      } else if (cycleVisited[neighbour]) {
        return true;
      }
    }
    delete cycleVisited[node];
    return false;
  }
  return helper(src);
}

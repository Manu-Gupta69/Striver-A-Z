function detectCycle() {
  let visited = {};
  let cycleVisited = {};
  let code = {};

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
    code[node] = true;
    delete cycleVisited[node];
    return false;
  }
  helper(src);
  return Object.keys(code);
}

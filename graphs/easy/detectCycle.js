// Detect the cycle in graph using BFS

function checkCycle(src) {
  let q = [];
  let visited = {};

  q.push({ node: src, parent: -1 });
  while (q.length) {
    let { node, parent } = q.shift();
    for (let neighbour of graph[node]) {
      if (!visited[neighbour]) {
        q.push({ neighbour, parent: node });
      } else {
        if (neighbour !== parent) {
          return false;
        }
      }
    }
  }
  return true;
}

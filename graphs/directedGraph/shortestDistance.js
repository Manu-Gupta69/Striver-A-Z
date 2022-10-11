//Find the shortest path in directed acyclic graph
function shortestDistance() {
  let visited = {};
  let topoStack = [];
  let distance = new Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
  function topoHelper(node) {
    visited[node] = true;
    for (let neighbour of graph[node]) {
      if (!visited[neighbour]) {
        topoHelper(neighbour);
      }
    }
    topoStack.push(node);
  }

  for (let i = 0; i < graph.length; i++) {
    topoHelper(i);
  }
  distance[topoStack[topoStack.length - 1]] = 0;
  while (topoStack.length) {
    let node = topoStack.pop();
    for (let { neighbour, weight } of graph[node]) {
      if (distance[node] + weight < distance[neighbour]) {
        distance[neighbour] = distance[node] + weight;
      }
    }
  }
  return distance;
}

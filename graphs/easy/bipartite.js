// Check if a graph is bipartite or not
// Bipartite -> A graph is bipartite if the nodes of the graph can be colored with exact two colors and no two
// adjacent node can have the same color

function bipartite() {
  let q = [];
  visitedWithColor = {};
  q.push(src);
  visitedWithColor[src] = 0;

  while (q.length) {
    let node = q.shift();
    for (let neighbour of node) {
      if (!visitedWithColor[neighbour]) {
        q.push(neighbour);
        visitedWithColor[neighbour] = node ? 0 : 1;
      } else if (visitedWithColor[neighbour] == visitedWithColor[node]) {
        return false;
      }
    }
  }
  return true;
}

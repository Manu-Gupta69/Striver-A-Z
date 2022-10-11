// Find the shorted distance in undirected graph having unit weights

function shortestDistance() {
  let q = [];
  let distance = [];
  q.push(src);
  while (q.length) {
    let node = q.shift();

    for (let neighbour of graph[node]) {
      if (distance[node] + 1 < distance[neighbour]) {
        distance[neighbour] = distance[node] + 1;
        q.push(neighbour);
      }
    }
  }
}

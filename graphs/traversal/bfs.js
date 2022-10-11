// Breath first search travsersal Graph

function bfs() {
  let visited = {};
  let q = [];
  visited[0] = true;
  q.push(0);

  while (q.length) {
    let node = q.shift();
    for (let neighbour of node) {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        q.push(neighbour);
      }
    }
  }
}

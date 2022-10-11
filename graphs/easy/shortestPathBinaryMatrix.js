// Find the shortest path from src to destination in a binary matrix

function shortestPath(srcRow, srcCol) {
  let visited = new Array(graph.length)
    .fill(null)
    .map((item) => new Array(graph[0].length).fill(Number.MAX_SAFE_INTEGER));
  let q = [];
  visited[srcRow][srcCol] = 0;
  let rowT = [-1, +1, 0, 0];
  let colT = [0, 0, +1, -1];
  q.push({ distance: 0, row: srcRow, col: srcCol });
  while (q.length) {
    let { distance, row, col } = q.shift();
    for (let i = 0; i < 4; i++) {
      let newRow = row + rowT[i];
      let newCol = col + colT[i];

      if (
        newRow >= 0 &&
        newRow < graph.length &&
        newCol >= 0 &&
        newCol < graph[0].length &&
        graph[newRow][newCol] == 1 &&
        distance + 1 < visited[newRow][newCol]
      ) {
        visited[newRow][newCol] = distance + 1;
        if (newRow == destinationRow && newCol == destinationCol) {
          return distance + 1;
        }
        q.push({ distance: distance + 1, row: newRow, col: newCol });
      }
    }
  }
  return -1;
}

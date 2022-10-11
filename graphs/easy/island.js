//Find the number of island

function island() {
  let visited = new Array(graph.length)
    .fill(null)
    .map((item) => new Array(graph[0].length).fill(-1));
  let count = 0;
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (graph[i][j] == 1 && !visited[i][j]) {
        count += 1;
        bfs(i, j, visited);
      }
    }
  }
  return count;
}

function bfs(row, col, visited) {
  let q = [];
  q.push({ row, col });
  visited[row][col] = 1;
  let rowT = [-1, +1, 0, 0];
  let colT = [0, 0, -1, +1];
  while (q.length) {
    let { row, col } = q.shift();
    for (let i = 0; i < 4; i++) {
      let newRow = row + rowT[i];
      let newCol = col + colT[i];
      if (
        newRow >= 0 &&
        newRow <= graph.length &&
        newCol >= 0 &&
        newCol <= graph[0].length &&
        graph[newRow][newCol] == 1 &&
        visited[newRow][newCol] !== 1
      ) {
        visited[newRow][newCol] = 1;
        q.push({ newRow, newCol });
      }
    }
  }
}

// Minimum time take to rotten all the oranges

function rottenOranges() {
  let q = [];
  let maxTime = 0;
  let visited = new Array(graph.length)
    .fill(null)
    .map((item) => new Array(graph[0].length).fill(0));
  let rowT = [-1, +1, 0, 0];
  let colT = [0, 0, -1, +1];
  for (let row = 0; row < graph.length; row++) {
    for (let col = 0; col < graph[0].length; col++) {
      if (graph[row][col] == 2) {
        q.push({ row, col, time: 0 });
        visited[row][col] = 2;
      }
    }
  }

  while (q.length) {
    let { row, col, time } = q.shift();
    maxTime = Math.max(time, maxTime);
    for (let i = 0; i < 4; i++) {
      let newRow = row + rowT[i];
      let newCol = col + colT[i];

      if (
        newRow >= 0 &&
        newRow < graph.length &&
        newCol >= 0 &&
        newCol < graph[0].length &&
        visited[newRow][newCol] !== 2 &&
        graph[newRow][newCol] == 1
      ) {
        q.push({ row: newRow, col: newCol, time: time + 1 });
      }
    }
  }
  for (let row = 0; row < graph.length; row++) {
    for (let col = 0; col < graph[row].length; col++) {
      if (graph[row][col] == 1 && visited[row][col] !== 2) return -1;
    }
  }
  return maxTime;
}

// Find the distance of the zeros from all the ones

// Solution find all the ones and get the distance of zeros from them

function allDistance() {
  let q = [];
  let rowT = [-1, +1, 0, 0];
  let colT = [0, 0, -1, +1];
  let visited = new Array(graph.length)
    .fill(null)
    .map((item) => new Array(graph[0].length).fill(0));
  let dis = new Array(graph.length)
    .fill(null)
    .map((item) => new Array(graph[0].length).fill(-1));

  for (let row = 0; row < graph.length; row++) {
    for (let col = 0; col < graph[0].length; col++) {
      if (graph[row][col] == 1) {
        q.push({ row, col, distance: 0 });
        visited[row][col] = 1;
      }
    }
  }

  while (q.length) {
    let { row, col, distance } = q.shift();
    dis[row][col] = distance;
    for (let i = 0; i < 4; i++) {
      let newRow = row + rowT[i];
      let newCol = col + colT[i];
      if (
        newRow >= 0 &&
        newRow < graph.length &&
        newCol >= 0 &&
        newCol < graph[0].length &&
        visited[newRow][newCol] == 0
      ) {
        visited[newRow][newCol] = 1;
        q.push({ row: newRow, col: newCol, distance: distance + 1 });
      }
    }
  }
}

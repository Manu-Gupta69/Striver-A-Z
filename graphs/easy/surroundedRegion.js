// Convert all the 0 to x which are surrounded by x

function surrounded() {
  let visited = new Array(graph.length)
    .fill(null)
    .map((item) => new Array(graph[0].length).fill(-1));

  let rowT = [-1, +1, 0, 0];
  let colT = [0, 0, -1, +1];

  //top col
  for (let col = 0; col < graph[0].length; col++) {
    if (graph[0][col] == "0") {
      dfs(0, col);
    }
  }
  // bottom col
  for (let col = 0; col < graph[0].length; col++) {
    if (graph[graph.length - 1][col] == "0") {
      dfs(graph.length - 1, col);
    }
  }
  //front row
  for (let row = 1; row < graph.length - 1; row++) {
    if (graph[row][0] == "0") {
      dfs(row, 0);
    }
  }
  // last row
  for (let row = 1; row < graph.length - 1; row++) {
    if (graph[row][graph[0].length - 1] == "0") {
      dfs(row, 0);
    }
  }

  function dfs(row, col) {
    visited[row][col] = 1;

    for (let i = 0; i < 4; i++) {
      let newRow = row + rowT[i];
      let newCol = col + colT[i];

      if (
        newRow >= 0 &&
        newRow < graph.length &&
        newCol >= 0 &&
        newCol < graph[0].length &&
        graph[newRow][newCol] == "0" &&
        !visited[row][col]
      ) {
        dfs(newRow, newCol);
      }
    }
  }

  for (let row = 0; row < graph.length; row++) {
    for (let col = 0; col < graph[0].length; col++) {
      if (!visited[row][col] && graph[row][col] == "0") {
        graph[row][col] = "X";
      }
    }
  }
}

//Flood fill (Fill the connecting neighbours with same color)

function floodFill() {
  let rowT = [-1, +1, 0, 0];
  let colT = [0, 0, -1, +1];
  function helperDfs(row, col) {
    ans[row][col] = newColor;

    for (let i = 0; i < 3; i++) {
      let newRow = row + rowT[i];
      let newCol = col + colT[i];
      if (
        newRow >= 0 &&
        newRow < graph.length &&
        newCol >= 0 &&
        newCol < graph[0].length &&
        graph[newRow][newCol] == initialColor &&
        ans[newRow][newCol] !== newCol
      ) {
        helperDfs(newRow, newCol);
      }
    }
  }
  helperDfs(0, 0);
}

function ClosestEnemyII(strArr) { 
  let visited = new Array(strArr.length)
          .fill()
          .map(() => new Array(strArr[0].length).fill(0));

  let start = null;
  let moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[0].length; j++) {
      if (strArr[i][j] === '1') {
        start = [i, j];
        break;
      }
    }
    if (start) break;
  }

  let queue = [[start[0], start[1], 0]];

  while (queue.length) {
    let [i, j, move] = queue.shift();

    if (strArr[i][j] === '2') return move;

    if (visited[i][j] === 1) continue;
    visited[i][j] = 1;

    for (let [x, y] of moves) {
      let nextRow = i + x;
      let nextCol = j + y;
      if (nextRow < 0) nextRow = strArr.length - 1;
      else if (nextRow > strArr.length - 1) nextRow = 0;
      if (nextCol < 0) nextCol = strArr[0].length - 1;
      else if (nextCol > strArr[0].length - 1) nextCol = 0;
      queue.push([nextRow, nextCol, move + 1]);
    }
  }
  return 0;
}

function BitmapHoles(strArr) { 
  let holes = 0;
  strArr = strArr.map(str => str.split(''));

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (strArr[i][j] === '0') {
        DFS(i, j, strArr);
        holes++;
      }
    }
  }
  return holes;
}

function DFS(i, j, strArr) {
  if (i < 0 || i > strArr.length - 1 || j < 0 || j > strArr[0].length - 1) return;
  if (strArr[i][j] !== '0') return;
  strArr[i][j] = '#';
  DFS(i-1, j, strArr);
  DFS(i+1, j, strArr);
  DFS(i, j-1, strArr);
  DFS(i, j+1, strArr);
}

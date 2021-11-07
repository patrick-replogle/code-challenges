function ArrayAdditionI(arr) { 
  let target = Math.max(...arr);
  let flag = false;

  function solve(sum, index) {
    if (sum === target) {
      return flag = true;
    }
    if (index > arr.length || flag) return;

    if (arr[index] !== target) {
      solve(sum + arr[index], index + 1);
    }
    solve(sum, index + 1);
  }
  
  solve(0, 0);

  return flag;
}

function ClosestEnemy(arr) { 
  let startIdx = arr.indexOf(1);
  let left = startIdx;
  let right = startIdx;
  let enemyToLeft = Infinity;
  let enemyToRight = Infinity;

  while (left > 0) {
    left--;
    if (arr[left] === 2) {
      enemyToLeft = startIdx - left;
      break;
    }
  }

  while (right < arr.length - 1) {
    right++;
    if (arr[right] === 2) {
      enemyToRight = right - startIdx;
      break;
    }
  }
  if (enemyToLeft === Infinity && enemyToRight === Infinity) {
    return 0;
  }
  return Math.min(enemyToLeft, enemyToRight);
}

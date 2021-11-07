function SumMultiplier(arr) { 
  let target = arr.reduce((acc, el) => acc + el, 0) * 2;
  let largest = 0;
  let secondLargest = 0;
  let largestIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      largestIndex = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i === largestIndex) continue;
    secondLargest = Math.max(arr[i], secondLargest);
  }

  if (largest * secondLargest > target) {
    return true;
  }
  return false;
}

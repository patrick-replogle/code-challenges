function ThreeSum(arr) { 
  let target = arr[0];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum === target) return true;
      if (sum > target) k--;
      else j++;
    }
  }
  return false;
}

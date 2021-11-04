function MeanMode(arr) { 
  let count = {};
  let sum = 0;
  let maxCount = 0;
  let mode = null;

  for (let num of arr) {
    if (!(num in count)) {
      count[num] = 0;
    }
    count[num]++;
    sum += num;

    if (count[num] > maxCount) {
      maxCount = count[num];
      mode = num;
    }
  }

  if (sum / arr.length === mode) {
    return 1;
  }
  return 0;
}

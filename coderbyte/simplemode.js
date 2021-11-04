function SimpleMode(arr) { 
  let count = {};
  let modeCount = 0;

  for (let num of arr) {
    if (!(num in count)) {
      count[num] = 0;
    }
    count[num]++;
    modeCount = Math.max(modeCount, count[num]);
  }

  if (modeCount < 2) return -1;
  
  for (let num of arr) {
    if (count[num] === modeCount) {
      return num;
    }
  }
  return -1;
}

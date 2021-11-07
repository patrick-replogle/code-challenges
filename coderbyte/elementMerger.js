function ElementMerger(arr) { 
  while (arr.length > 1) {
    let nextArray = [];
    for (let i = 1; i < arr.length; i++) {
      nextArray.push(Math.abs(arr[i] - arr[i-1]));
    }
    arr = nextArray;
  }
  return arr[0];
}
  

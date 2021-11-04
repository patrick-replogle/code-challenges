function TwoSum(arr) { 
  let pairs = [];
  let dict = {};
  let target = arr[0];
  let output = '';

  for (let i = 0; i < arr.length; i++) {
    if ((target - arr[i]) in dict) {
      pairs.push([dict[target-arr[i]], i]);
    }
    dict[arr[i]] = i;
  }
  
  pairs.sort((a, b) => a[0] - b[0]);
  
  for (let [x, y] of pairs) {
    output += arr[x] + ',' + arr[y] + ' ';
  }

  return output.length ? output.trim() : -1;
}

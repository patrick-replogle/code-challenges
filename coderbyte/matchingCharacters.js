function MatchingCharacters(str) { 
  let dict = {};
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!(char in dict)) {
      dict[char] = [];
    }
    dict[char].push(i);
  }

  for (let arr of Object.values(dict)) {
    if (arr.length > 1) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          let uniqueCount = new Set(str.slice(arr[i] + 1, arr[j]));
          max = Math.max(max, uniqueCount.size)
        }
      }
    }
  }
  return max;
}

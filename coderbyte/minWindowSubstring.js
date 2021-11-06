// first pass solution
function MinWindowSubstring(strArr) { 
  let substringCount = new Array(26).fill(0);
  let min = strArr[0];

  for (let char of strArr[1]) {
    let index = char.charCodeAt(0) - 97;
    substringCount[index]++;
  }
  
  for (let i = 0; i < strArr[0].length; i++) {
    let count = new Array(26).fill(0);
    for (let j = i; j < strArr[0].length; j++) {
      let index = strArr[0][j].charCodeAt(0) - 97;
      count[index]++;
      if (check(substringCount, count) && j - i + 1 < min.length) {
        min = strArr[0].slice(i, j + 1);
      } 
    }
  }
  return min;
}

function check(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] > 0 && arr2[i] < arr1[i]) return false;
  }
  return true;
}

// second pass solution
function MinWindowSubstring(strArr) { 
  let a = strArr[0];
  let b = strArr[1];
  let aCount = new Array(26).fill(0);
  let bCount = new Array(26).fill(0);
  let min = a;

  for (let char of b) {
    let index = char.charCodeAt(0) - 97;
    bCount[index]++;
  }
  
  let left = 0;
  let right = 0;

  while (right < a.length) {
    let index = a[right].charCodeAt(0) - 97;
    aCount[index]++;

    if (check(bCount, aCount)) {
      if (right - left + 1 < min.length) {
        min = a.slice(left, right + 1);
      }

      while (left <= right && check(bCount, aCount)) {
        let index = a[left].charCodeAt(0) - 97;
        aCount[index]--;
        left++;
        if (check(bCount, aCount) && (right - left + 1) < min.length) {
          min = a.slice(left, right + 1);
        } 
      }
    }
    right++;
  }
  return min;
}

function check(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] > 0 && arr2[i] < arr1[i]) return false;
  }
  return true;
}

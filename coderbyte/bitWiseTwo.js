function BitwiseTwo(strArr) { 
  let output = '';
  let len = strArr[0].length;

  for (let i = len - 1; i >= 0; i--) {
    if (strArr[0][i] === '1' && strArr[1][i] === '1') {
      output = '1' + output;
    } else {
      output = '0' + output;
    }
  }
  return output;
}

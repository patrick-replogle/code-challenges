function ThirdGreatest(strArr) { 
  let sorted = [...strArr].sort((a, b) => a.length - b.length);
  let len = sorted[sorted.length - 3].length;
  let output = '';

  for (let str of strArr) {
    if (str.length === len) {
      output = str;
    }
  }
  return output;
}

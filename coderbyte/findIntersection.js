function FindIntersection(strArr) { 
  let output = [];
  let set = new Set(strArr[0].split(', '));

  for (let num of strArr[1].split(', ')) {
    if (set.has(num)) output.push(num);
  }

  return !output.length ? 'false' : output.join(',');
}

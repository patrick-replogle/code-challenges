function ArrayMatching(strArr) { 
  let output = [];
  let arr1 = strArr[0]
              .replace('[', '')
              .replace(']', '')
              .split(', ');
  let arr2 = strArr[1]
              .replace('[', '')
              .replace(']', '')
              .split(', ');
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    output.push(Number(arr1[i]) + Number(arr2[j]));
    i++;
    j++;
  }

  while (i < arr1.length) {
    output.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    output.push(arr2[j]);
    j++;
  }

  return output.join('-');
}

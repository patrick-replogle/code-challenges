function SerialNumber(str) { 
  let arr = str.split('.');

  if (arr.length !== 3) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 2) return false;
    
    let sum = Number(arr[i][arr[i].length - 1]);
    let lastDigit = Number(arr[i][arr[i].length - 1]);
    
    for (let j = 0; j < arr[i].length - 1; j++) {
      sum += Number(arr[i][j]);
      if (Number(arr[i][j]) >= lastDigit) return false;
    }
    if (i === 0 && sum % 2 !== 0) return false;
    if (i === 1 && sum % 2 === 0) return false;
  }
  return true;
}

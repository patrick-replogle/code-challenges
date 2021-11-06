function SecondGreatLow(arr) { 
  if (arr.length === 2) {
    return Math.max(arr[0], arr[1]) + ' ' + Math.min(arr[0], arr[1]);
  }

  arr.sort((a, b) => a - b);

  let i = 0;
  let j = arr.length - 1;

  while (j >= 0 && arr[j] === arr[arr.length - 1]) j--;
  while (i < arr.length && arr[i] === arr[0]) i++;

  return arr[i] + ' ' + arr[j];
}

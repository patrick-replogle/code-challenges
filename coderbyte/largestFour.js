function LargestFour(arr) { 
  if (arr.length < 4) {
    return arr.reduce((acc, el) => acc + el, 0);
  }

  return arr
          .sort((a, b) => a - b)
          .slice(arr.length - 4)
          .reduce((acc, el) => acc + el, 0);
}

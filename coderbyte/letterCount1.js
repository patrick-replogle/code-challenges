function LetterCountI(str) { 
  let max = 0;
  let count = {};
  
  for (let word of str.split(' ')) {
    let charCount = new Array(26).fill(0);
    let currMax = 0;

    for (let char of word) {
      let index = char.toLowerCase().charCodeAt(0) - 97;
      charCount[index]++;
      currMax = Math.max(currMax, charCount[index]);
    }
    count[word] = currMax;
    max = Math.max(max, currMax);
  }

  if (max < 2) return -1;
  
  for (let word of str.split(' ')) {
    if (count[word] === max) return word;
  }
}

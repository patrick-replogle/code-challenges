function NonrepeatingCharacter(str) { 
  let charCount = {};

  for (let char of str) {
    if (!(char in charCount)) {
      charCount[char] = 0;
    }
    charCount[char]++;
  }

  for (let char of str) {
    if (charCount[char] === 1) return char;
  }
  return -1;
}

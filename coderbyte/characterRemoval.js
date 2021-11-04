function CharacterRemoval(strArr) { 
  let word1 = strArr[0];
  let set = new Set(strArr[0]);
  let min = Infinity;

  for (let word2 of strArr[1].split(',')) {
    let i = 0;
    let j = 0;
    let diff = 0;
    let flag = true;

    while (i < word1.length && j < word2.length) {
      if (!set.has(word2[j])) {
        flag = false;
        break;
      }
      if (word1[i] === word2[j]) {
        i++;
        j++;
      } else {
        diff++;
        i++;
      }
    }
    if (flag && j === word2.length) {
      min = Math.min(min, diff + word1.length - i)
    }
  }
  return min === Infinity ? - 1 : min;
}

function QuestionsMarks(str) { 
  let flag = false;
  str = str.replace(/[^0-9?]/g, '');
  
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        flag = true;
        let count = 0;
        for (let k = i + 1; k < j; k++) {
          if (str[k] === '?') count++;
        }
        if (count !== 3) return false;
        else break;
      }
    }
  }
  return flag;
}

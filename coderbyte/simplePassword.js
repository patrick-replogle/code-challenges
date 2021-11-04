function SimplePassword(str) { 
  if (str.length < 7 || str.length > 31) return false;
  if (str.toLowerCase().indexOf('password') > -1) return false;

  let capital = false;
  let number = false;
  let punctuation = false;

  for (let char of str) {
    if (/[A-Z]/.test(char)) capital = true;
    if (/[0-9]/.test(char)) number = true;
    if (/[^a-zA-Z0-9]/.test(char)) punctuation = true;
  }
  return capital && number && punctuation;
}

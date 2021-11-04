function CaesarCipher(str, num) { 
  let output = '';

  for (let char of str) {
    if (/[a-z]/gi.test(char)) {
      
      let index = (char.toLowerCase().charCodeAt(0) - 97 + num) % 26;
      let cipherChar = String.fromCharCode(index + 97);
      if (char.toLowerCase() === char) output += cipherChar;
      else output += cipherChar.toUpperCase();
    } else {
      output += char;
    }
  }
  return output;
}

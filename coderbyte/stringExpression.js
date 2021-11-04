function StringExpression(str) { 
  let expression = '';
  let curr = '';
  let output = '';

  let dict1 = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'plus': '+',
    'minus': '-'
  }

  let dict2 = {
    '-': 'negative',
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  }

  for (let char of str) {
    curr += char;
    if (curr in dict1) {
      expression += dict1[curr];
      curr = '';
    }
  }

  let evaluated = eval(expression);

  for (let char of String(evaluated)) {
    output += dict2[char];
  }
  return output;
}
   

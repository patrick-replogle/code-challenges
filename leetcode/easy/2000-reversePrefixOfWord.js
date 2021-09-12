// first pass solution
var reversePrefix = function(word, ch) {
    let index = word.indexOf(ch);
    
    return word.slice(0, index + 1).split('').reverse().join('') + word.slice(index + 1);
};

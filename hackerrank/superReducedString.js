/*
Function Description

Complete the superReducedString function in the editor below.

superReducedString has the following parameter(s):

string s: a string to reduce
*/

// first pass solution
function superReducedString(s) {
    let stack = [];
    
    for (let char of s) {
        if (stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length ? stack.join('') : 'Empty String';
}

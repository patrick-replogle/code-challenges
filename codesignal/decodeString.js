/*
Given an encoded string, return its corresponding decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed 
to be a positive integer.

Note that your solution should have linear complexity because this is what you will be asked during an interview.

Example

For s = "4[ab]", the output should be
decodeString(s) = "abababab";

For s = "2[b3[a]]", the output should be
decodeString(s) = "baaabaaa";

For s = "z1[y]zzz2[abc]", the output should be
decodeString(s) = "zyzzzabcabc".
*/

// first pass solution 
function decodeString(s) {
    let stack = [];
    
    for (let char of s) {
        if (char === ']') {
            let number = '';
            let curr = '';
            
            while (/[a-z]/.test(stack[stack.length - 1])) {
                curr = stack.pop() + curr;
            }
            stack.pop(); // pop off '['
            
            while (/[0-9]/.test(stack[stack.length - 1])) {
                number = stack.pop() + number;
            }
            stack.push(curr.repeat(number));
        }
        else {
            stack.push(char);
        }
    }
    return stack.join('');
}

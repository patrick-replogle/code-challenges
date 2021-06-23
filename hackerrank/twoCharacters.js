/*
Given a string, remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances 
of that character must be removed. Determine the longest string possible that contains just two alternating letters.

Example


Delete a, to leave bcdbd. Now, remove the character c to leave the valid string bdbd with a length of 4. Removing either b or d at any point would not 
result in a valid string. Return .

Given a string , convert it to the longest possible string  made up only of alternating characters. Return the length of string . If no string  can be 
formed, return .

Function Description

Complete the alternate function in the editor below.

alternate has the following parameter(s):

string s: a string
*/

// first pass solution
function isValid(str) {
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i-1]) return 0;
    }
    return str.length;
}

function alternate(s) {
    let set = new Set(s.split(''));
    let arr = Array.from(set);
    let pairs = [];
    let output = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]]);
        }
    }
    for (let [a, b] of pairs) {
        let str = '';
        s.split('').forEach(char => {
            if (char === a || char === b) {
                str += char;
            }
        });
        output = Math.max(output, isValid(str));
    }
    return output;
}

// second pass solution
function alternate(s) {
    let set = new Set(s.split(''));
    let arr = Array.from(set);
    let pairs = [];
    let output = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]]);
        }
    }
    for (let [a, b] of pairs) {
        let prev = null;
        let count = 0;
        for (let char of s) {
            if (char === a || char === b) {
                if (char === prev) {
                    count = 0;
                    break;
                } else {
                    count++;
                    prev = char;
                }
            }
        }
        output = Math.max(count, output);
    }
    return output;
}

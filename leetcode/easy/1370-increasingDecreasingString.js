/*
Given a string s. You should re-order the string using the following algorithm:

Pick the smallest character from s and append it to the result.
Pick the smallest character from s which is greater than the last appended character to the result and append it.
Repeat step 2 until you cannot pick more characters.
Pick the largest character from s and append it to the result.
Pick the largest character from s which is smaller than the last appended character to the result and append it.
Repeat step 5 until you cannot pick more characters.
Repeat the steps from 1 to 6 until you pick all characters from s.
In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.

Example 1:
Input: s = "aaaabbbbcccc"
Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
Example 2:

Input: s = "rat"
Output: "art"
Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.
*/

// first pass solution
var sortString = function(s) {
    let dict = {};
    let output = '';
    let i = 0;
    
    for (let char of s) {
        dict[char] ? dict[char] += 1 : dict[char] = 1;
    }
    
    let entries = Object.entries(dict).sort((a, b) => a[0].localeCompare(b[0]));
    
    while (output.length < s.length) {
        while (i < entries.length) {
            if (entries[i][1] > 0) {
                output += entries[i][0];
                entries[i][1]--;
            }
            
            i++;
            if (i === entries.length) {
                i = entries.length - 1;
                break;
            }
        }
        while (i >= 0) {
            if (entries[i][1] > 0) {
                output += entries[i][0];
                entries[i][1]--;
            }
            i--;
            if (i < 0) {
                i = 0;
                break;
            }
        }
    }
    return output;
};

// second pass solution
var sortString = function(s) {
    let output = '';
    s = s.split('').sort();
    
    while (s.length) {
        let start = true;
        for (let i = 0; i < s.length; i++) {
            if (start || output[output.length - 1] !== s[i]) {
                output += s[i];
                s.splice(i, 1);
                start = false;
                i--;
            }
        } 
        
        start = true;
        
        for (let i = s.length - 1; i >= 0; i--) {
            if (start || output[output.length - 1] !== s[i]) {
                output += s[i];
                s.splice(i, 1);
                start = false;
            }
        }
    }
    return output;
};

// third pass solution
var sortString = function(s) {
    let output = '';
    let set = new Set();
    s = s.split('').sort();
    
    while (output.length < s.length) {
        let start = true;
        
        for (let i = 0; i < s.length; i++) {
            if (!set.has(i) && (start || output[output.length - 1] !== s[i])) {
                output += s[i];
                set.add(i);
                start = false;
            }
            if (output.length === s.length) break;
        } 
        
        start = true;
        
        for (let i = s.length - 1; i >= 0; i--) {
            if (!set.has(i) && (start || output[output.length - 1] !== s[i])) {
                output += s[i];
                set.add(i);
                start = false;
            }
            if (output.length === s.length) break;
        }
    }
    return output;
};

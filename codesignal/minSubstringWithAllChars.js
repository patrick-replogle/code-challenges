/*
You have two strings, s and t. The string t contains only unique elements. Find and return the minimum consecutive substring of s 
that contains all of the elements from t.

It's guaranteed that the answer exists. If there are several answers, return the one which starts from the smallest index.

Example

For s = "adobecodebanc" and t = "abc", the output should be
minSubstringWithAllChars(s, t) = "banc".
*/

// first pass solution
function minSubstringWithAllChars(s, t) {
    let output = '';
    let len = Infinity;
    let index = null;
    
    for (let i = 0; i < s.length - t.length + 1; i++) {
        let curr = '';
        let copy = t;
        for (let j = i; j < s.length; j++) {
            curr += s[j];
            if (copy.includes(s[j])) {
                copy = copy.replace(s[j], '');
                if (copy.length === 0) {
                    if (curr.length < len) {
                        output = curr;
                        len = curr.length;
                        index = i;
                    }
                    break;
                }
            }
        }
    }
    return output;
}

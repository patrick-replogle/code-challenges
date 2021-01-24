// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the 
// right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// It is guaranteed that the answer is unique.

// Example 1:
// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.

// Example 2:
// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation: 
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"

// Example 3:
// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"

// first pass solution
var removeDuplicates = function(s, k) {
    let arr = s.split('');
    
    while (true) {
        let flag = true;
        let i = 0;
        
        while (i < arr.length) {
            let char = arr[i];
            let j = i;
            
            while (j < i + k && arr[j] === char) { 
                j++; 
            }
            
            if (j === i + k) {
                arr.splice(i, k);
                flag = false;
            } else {
                i++;
            }
        }
        if (flag) break;
    }
    return arr.join('');
};

// second pass solution
var removeDuplicates = function(s, k) {
    let stack = [];
    
    for (let char of s) {
        stack.push(char);
        
        if (stack.length >= k) {
            let j = stack.length - 1;
            let count = 0;
            
            while (stack[j] === char && j >= 0) {
                count++;
                j--;
            }
            if (count === k) {
                while (count > 0) {
                    stack.pop();
                    count--;
                }
            }
        }
    }
    return stack.join('')
};

// third pass solution
var removeDuplicates = function(s, k) {
    let stack = [];
    
    for (let char of s) {
        if (!stack.length || char !== stack[stack.length - 1][0]) {
            stack.push([char, 1]);
        } 
        else if (stack[stack.length - 1][0] === char && stack[stack.length - 1][1] < k - 1) {
            stack[stack.length - 1][1] += 1;
        } 
        else {
            stack.pop();
        }
    }
    return stack.map(tuple => tuple[0].repeat(tuple[1])).join('')
};




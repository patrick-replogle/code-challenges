// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:
// Input: "PPALLP"
// Output: True
// Example 2:
// Input: "PPALLL"
// Output: False

// first pass solution
var checkRecord = function(s) {
    if (s.length <= 1) return true;
    
    let records = { 'A': 0, 'L': 0, 'P': 0 };
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        records[char] += 1
        
        if (records['A'] > 1) return false;
        if (char === 'L' && i + 2 < s.length) {
            if (s[i + 1] === 'L' && s[i + 2] === 'L') {
                return false;
            }
        }
    }
    return true;
};

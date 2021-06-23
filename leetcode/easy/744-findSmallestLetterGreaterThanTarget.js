// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

// Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

// Examples:
// Input:
// letters = ["c", "f", "j"]
// target = "a"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "c"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "d"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "g"
// Output: "j"

// first pass linear search
var nextGreatestLetter = function(letters, target) {
    for (let char of letters) {
        if (char > target) {
            return char;
        }
    } 
    return letters[0];
};

//second pass solution using binary search
var nextGreatestLetter = function(letters, target) {
    let len = letters.length - 1;
    let low = 0;
    let high = letters.length - 1;
    
    if (target < letters[0] || target >= letters[len]) return letters[0];
    
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (target < letters[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return letters[low];
};


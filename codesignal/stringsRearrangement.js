// Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each 
// consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

// Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false.

// There are 6 possible arrangements for these strings:

// ["aba", "bbb", "bab"]
// ["aba", "bab", "bbb"]
// ["bbb", "aba", "bab"]
// ["bbb", "bab", "aba"]
// ["bab", "bbb", "aba"]
// ["bab", "aba", "bbb"]
// None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

// It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), 
// so return true.

function stringsRearrangement(a) {
    let permutations = [];

    permute(permutations, [], a);

    for (let arr of permutations) {
        let match = true;

        for (let i = 1; i < arr.length; i++) {
            if(!checkStrings(arr[i], arr[i-1])) {
                match = false;
                break;
            }
        }
        if (match) return true;
    }
    return false;
}

function permute(results, path, arr) {
    if (arr.length === 0) {
        results.push(path);
    } else {
        for (let i = 0; i < arr.length; i++) {
            permute(results, path.concat(arr[i]), arr.slice(0, i).concat(arr.slice(i+1)))
        }
    }   
}

function checkStrings(str1, str2) {
    let difference = 0;
    
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            difference += 1;
              
            if (difference > 1) return false;
        }
    }
    return difference === 1;
}

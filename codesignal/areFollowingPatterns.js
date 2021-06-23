/*
Given an array strings, determine whether it follows the sequence given in the patterns array. In other words, there should be no i and j for
which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

Example

For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = true;
For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = false.
*/

// first pass solution
function areFollowingPatterns(strings, patterns) {
    if (strings.length !== patterns.length) {
        return false;
    }
    let dict1 = {};
    let dict2 = {};
    
    for (let i = 0; i < strings.length; i++) {
        if (!(strings[i] in dict1)) {
            dict1[strings[i]] = patterns[i];
        }
        if (!(patterns[i] in dict2)) {
            dict2[patterns[i]] = strings[i]
        }
        if (strings[i] !== dict2[patterns[i]]) {
            return false;
        }
        if (patterns[i] !== dict1[strings[i]]) {
            return false;
        }
    }
    return true;
}

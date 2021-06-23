// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// first pass solution
var maxNumberOfBalloons = function(text) {
    let count = 0;
    let balloon = 'balloon';
    
    while (true) {
        let i = 0;
        
        while (i < balloon.length) {
            let index = text.indexOf(balloon[i]);
            if (index > -1) {
                i++;
                text = text.slice(0, index) + text.slice(index + 1);
            } else {
                return count;
            }
        }
        count++;
    }
    return count;
};

// second pass solution using hashtables
var maxNumberOfBalloons = function(text) {
    let count = 0;
    let balloon = { 'b': 1, 'a': 1, 'l': 2, 'o': 2 };
    let dict = {};
    
    for (let char of text) {
        if (char in balloon) {
            dict[char] ? dict[char] += 1 : dict[char] = 1;
        }
    }
    
    while (true) {
        for (let key in balloon) {
            if (dict[key] >= balloon[key]) {
                dict[key] -= balloon[key];
            } else {
                return count;
            }
        }
        count++;
    }
    return count;
};

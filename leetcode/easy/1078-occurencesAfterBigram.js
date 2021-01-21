// Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately 
// after first, and third comes immediately after second.

// For each such occurrence, add "third" to the answer, and return the answer.

// Example 1:
// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl","student"]

// Example 2:
// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we","rock"]

// first pass solution
var findOcurrences = function(text, first, second) {
    let split = text.split(' ');
    let output = [];
    let i = 0;
    
    while (i < split.length) {
        if (split[i] === first && split[i + 1] === second && split[i + 2]) {
            output.push(split[i + 2]);
            i += 2;
        } else {
            i++;
        }
    }
    return output;
};


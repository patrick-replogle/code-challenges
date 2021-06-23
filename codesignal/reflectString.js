// Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

// Define a string reflection as the result of applying the alphabet reflection to each of its characters.

// Reflect the given string.

// Example

// For inputString = "name", the output should be
// reflectString(inputString) = "mznv"

function reflectString(inputString) {
    let result = "";
    
    for (let char of inputString) {
        let charDiff = char.charCodeAt(0) - "a".charCodeAt(0);
        result += String.fromCharCode("z".charCodeAt(0) - charDiff);
    }
    return result;
}

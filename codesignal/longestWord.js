// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

// Example

// For text = "Ready, steady, go!", the output should be
// longestWord(text) = "steady".

function longestWord(text) {
    let max = "";
    text = text.split(/[^a-zA-Z]/);
    
    for (let str of text) {
        if (str && str.length > max.length) {
            max = str;
        }
    }
    return max;
}

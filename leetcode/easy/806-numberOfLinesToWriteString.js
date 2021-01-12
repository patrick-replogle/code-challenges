// You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] 
// is the width of 'a', widths[1] is the width of 'b', and so on.

// You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first 
// line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. 
// Continue this process until you have written all of s.

// Return an array result of length 2 where:

// result[0] is the total number of lines.
// result[1] is the width of the last line in pixels.

// first pass solution
var numberOfLines = function(widths, s) {
    let result = [0, 0];
    let curr = 0;

    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt(0) - 97;
        if (curr + widths[index] <= 100) {
            curr += widths[index];
        } else {
            result[0]++;
            curr = widths[index]
        }
    }

    if (curr > 0) {
        result[0]++;
        result[1] = curr;
    }
    return result;
};
 

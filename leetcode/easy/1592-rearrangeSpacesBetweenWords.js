/*
You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English 
letters and are separated by at least one space. It's guaranteed that text contains at least one word.

Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If 
you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length 
as text.

Return the string after rearranging the spaces.

Example 1:
Input: text = "  this   is  a sentence "
Output: "this   is   a   sentence"
Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.

Example 2:
Input: text = " practice   makes   perfect"
Output: "practice   makes   perfect "
Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.

Example 3:
Input: text = "hello   world"
Output: "hello   world"
*/

// first pass solution
var reorderSpaces = function(text) {
    let spaceCount = 0;
    let words = text.split(' ').filter(el => el !== '');

    for (let char of text) {
        if (char === ' ') spaceCount++;
    }
    
    let spaces = Math.floor(spaceCount / (words.length - 1));
    let leftOver = spaceCount - (spaces * (words.length - 1));
    
    if (words.length > 1) {
        return words.join(' '.repeat(spaces)) + ' '.repeat(leftOver)
    }
    return words.join('') + ' '.repeat(spaceCount);
};

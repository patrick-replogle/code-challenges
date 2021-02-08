/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. 
The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are 
then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

Example 1:
Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

Example 2:
Input: command = "G()()()()(al)"
Output: "Gooooal"
*/

// first pass solution
var interpret = function(command) {
    let output = '';
    let i = 0;
    
    while (i < command.length) {
        if (command[i] === 'G') {
            output += 'G';
        }
        else if (command[i] === '(' && command[i+1] === ')') {
            output += 'o';
            i++;
        } 
        else if (command.slice(i, i + 4) === '(al)') {
            output += 'al';
            i += 3;
        } 
        i++;
    }
    return output;
};

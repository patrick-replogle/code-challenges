/*
You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from 
left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:

2 digits: A single block of length 2.
3 digits: A single block of length 3.
4 digits: Two blocks of length 2 each.
The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at 
most two blocks of length 2.

Return the phone number after formatting.

Example 1:
Input: number = "1-23-45 6"
Output: "123-456"
Explanation: The digits are "123456".
Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
Step 2: There are 3 digits remaining, so put them in a single block of length 3. The 2nd block is "456".
Joining the blocks gives "123-456".
*/

// first pass solution
var reformatNumber = function(number) {
    let str = number.replace(/[^0-9]/g, '');
    let output = '';
    
    if (str.length % 3 === 0) {
        while (str.length) {
            output += str.slice(0, 3)
            str = str.slice(3);
            if (str.length) output += '-';
        }
    }
    else {
       while (str.length) {
            if (str.length - 3 >= 4 || str.length - 3 >= 2) {
                output += str.slice(0, 3) + '-';
                str = str.slice(3);
            } else {
                output += str.slice(0, 2);
                str = str.slice(2);
                if (str.length) output += '-';
            }
       } 
    }
    return output;
};

// second pass solution
var reformatNumber = function(number) {
    let str = number.replace(/[^0-9]/g, '');
    let output = '';
    let i = 0
    
    while (i < str.length) {
        if (str.length - i > 4 || i + 3 === str.length) {
            output += str.slice(i, i + 3);
            i += 3;
            if (i < str.length) output += '-';
        }
        else if (i + 2 === str.length) {
            output += str.slice(i, i + 2);
            i += 2; 
        } else if (i + 4 === str.length) {
            output += str.slice(i, i + 2) + '-';
            i += 2;  
        }
    }
    return output;
};

/*
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can 
carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people 
is at most limit.

Return the minimum number of boats to carry every given person.

Example 1:
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Example 2:
Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
*/

// first pass solution
var numRescueBoats = function(people, limit) {
    let output = 0;
    let i = 0;
    let j = people.length - 1;
    
    people.sort((a, b) => a - b);
    
    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            i++;
            j--;
        } else {
            j--;
        }
        output++;
    }
    return output;
};

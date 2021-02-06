/*
Given a string s and an array of integers cost where cost[i] is the cost of deleting the ith character in s.

Return the minimum cost of deletions such that there are no two identical letters next to each other.

Notice that you will delete the chosen characters at the same time, in other words, after deleting a character, the costs of 
deleting other characters will not change.

Example 1:
Input: s = "abaac", cost = [1,2,3,4,5]
Output: 3
Explanation: Delete the letter "a" with cost 3 to get "abac" (String without two identical letters next to each other).
*/

// first pass solution (correct answer, but times out)
var minCost = function(s, cost) {
    let output = 0;
    let arr = s.split('');
    let i = 1;
    
    while (i < arr.length) {
        if (arr[i] === arr[i-1]) {
            let removedIdx = null;
            if (cost[i] < cost[i-1]) removedIdx = i;
            else removedIdx = i-1;
            output += cost[removedIdx];
            arr.splice(removedIdx, 1);
            cost.splice(removedIdx, 1);
            continue;
        }
        i++;
    }
    return output;
};

// second pass solution
var minCost = function(s, cost) {
    let output = 0;
    let arr = s.split('');
    let i = 1;
    
    while (i < arr.length) {
        if (arr[i] === arr[i-1]) {
            output += Math.min(cost[i], cost[i-1]);
            cost[i] = Math.max(cost[i], cost[i-1]);
        }
        i++;
    }
    return output;
};

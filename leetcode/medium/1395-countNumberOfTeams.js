/*
There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers amongst them under the following rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

Example 1:
Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).
*/

// first pass solution
var numTeams = function(rating) {
    let teams = 0;
    
    for (let i = 0; i < rating.length - 2; i++) {
        for (let j = i + 1; j < rating.length - 1; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                if ((rating[k] > rating[j] && rating[j] > rating [i]) 
                || (rating[k] < rating[j] && rating[j] < rating[i])) {
                    teams++;
                }
            }
        }
    }
    return teams;
};

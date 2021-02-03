/*
Given the array favoriteCompanies where favoriteCompanies[i] is the list of favorites companies for the ith person (indexed from 0).

Return the indices of people whose list of favorite companies is not a subset of any other list of favorites companies. You must return 
the indices in increasing order.

Example 1:
Input: favoriteCompanies = [["leetcode","google","facebook"],["google","microsoft"],["google","facebook"],["google"],["amazon"]]
Output: [0,1,4] 
Explanation: 
Person with index=2 has favoriteCompanies[2]=["google","facebook"] which is a subset of favoriteCompanies[0]=["leetcode","google","facebook"] 
corresponding to the person with index 0. 
Person with index=3 has favoriteCompanies[3]=["google"] which is a subset of favoriteCompanies[0]=["leetcode","google","facebook"] and 
favoriteCompanies[1]=["google","microsoft"]. 
Other lists of favorite companies are not a subset of another list, therefore, the answer is [0,1,4].
*/

// first pass solution
var peopleIndexes = function(favoriteCompanies) {
    let output = [];

    for (let i = 0; i < favoriteCompanies.length; i++) {
        let a = favoriteCompanies[i];
        let flag = true;
        for (let j = 0; j < favoriteCompanies.length; j++) {
            if (i === j) continue;
            let b = new Set(favoriteCompanies[j]);
            let count = 0;
            for (let c of favoriteCompanies[i]) {
                if (b.has(c)) count++;
                if (count === a.length) {
                    flag = false;
                    break;
                }
            }
            if (!flag) break;
        }
        if (flag) output.push(i);
    }
    return output;
};

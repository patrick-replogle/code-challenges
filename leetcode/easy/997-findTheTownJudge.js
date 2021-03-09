/*
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

Example 1:
Input: N = 2, trust = [[1,2]]
Output: 2

Example 2:
Input: N = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:
Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Example 4:
Input: N = 3, trust = [[1,2],[2,3]]
Output: -1
*/

// first pass solution
var findJudge = function(N, trust) {
    let set = new Set(); // add everyone who trusts someone in town
    let arr = new Array(N + 1).fill(0); // count how many people trust the person and index i
    
    for (let [x, y] of trust) {
        set.add(x);
        arr[y]++;
    }
    for (let i = 1; i < arr.length; i++) { 
        if (!set.has(i) && arr[i] === N - 1) { // judge trusts no one and everyone but the judge trusts the judge
            return i;
        }
    }
    return -1;
};

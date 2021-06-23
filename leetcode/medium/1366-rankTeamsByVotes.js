/*
In a special ranking system, each voter gives a rank from highest to lowest to all teams participated in the competition.

The ordering of teams is decided by who received the most position-one votes. If two or more teams tie in the first position, 
we consider the second position to resolve the conflict, if they tie again, we continue this process until the ties are resolved. 
If two or more teams are still tied after considering all positions, we rank them alphabetically based on their team letter.

Given an array of strings votes which is the votes of all voters in the ranking systems. Sort all teams according to the ranking 
system described above.

Return a string of all teams sorted by the ranking system.

Example 1:
Input: votes = ["ABC","ACB","ABC","ACB","ACB"]
Output: "ACB"
Explanation: Team A was ranked first place by 5 voters. No other team was voted as first place so team A is the first team.
Team B was ranked second by 2 voters and was ranked third by 3 voters.
Team C was ranked second by 3 voters and was ranked third by 2 voters.
As most of the voters ranked C second, team C is the second team and team B is the third.
*/

// two very similar solutions below

// 1:
var rankTeams = function(votes) {
    let tally = {};
   
    for (let vote of votes) {
        for (let i = 0; i < vote.length; i++) {
            let char = vote[i];
            if (char in tally) {
                tally[char][i]++;
            } else {
                tally[char] = new Array(vote.length).fill(0);
                tally[char][i]++;
            } 
        }
    }
    
    return Object.entries(tally).sort((a, b) => {
        for (let i = 0; i < votes[0].length; i++) {
            if (tally[b[0]][i] > tally[a[0]][i]) return 1;
            else if (tally[b[0]][i] < tally[a[0]][i]) return -1;
        }
        return a === b ? 0 : b > a ? -1 : 1;
    }).map((arr) => arr[0]).join('');
};

// 2:
var rankTeams = function(votes) {
    let tally = {};
   
    for (let vote of votes) {
        for (let i = 0; i < vote.length; i++) {
            let char = vote[i];
            if (char in tally) {
                tally[char][i]++;
            } else {
                tally[char] = new Array(vote.length).fill(0);
                tally[char][i]++;
            } 
        }
    }
    
    return votes[0].split('').sort((a, b) => {
        for (let i = 0; i < votes[0].length; i++) {
            if (tally[b][i] > tally[a][i]) return 1;
            else if (tally[b][i] < tally[a][i]) return -1;
        }
        return b === a ? b.localeCompare(a) : b > a ? -1 : 1;
    }).join('')
};

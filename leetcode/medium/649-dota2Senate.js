/*
In the world of Dota2, there are two parties: the Radiant and the Dire.

The Dota2 senate consists of senators coming from two parties. Now the senate wants to make a decision about a change in the Dota2 game. The voting for 
this change is a round-based procedure. In each round, each senator can exercise one of the two rights:

Ban one senator's right:
A senator can make another senator lose all his rights in this and all the following rounds.
Announce the victory:
If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and make the decision about 
the change in the game.
 

Given a string representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party respectively. 
Then if there are n senators, the size of the given string will be n.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting.
All the senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party, you need to predict which party will finally announce 
the victory and make the change in the Dota2 game. The output should be Radiant or Dire.

Example 1:
Input: "RD"
Output: "Radiant"
Explanation: The first senator comes from Radiant and he can just ban the next senator's right in the round 1. 
And the second senator can't exercise any rights any more since his right has been banned. 
And in the round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.
*/

// first pass solution
var predictPartyVictory = function(senate) {
    let arr = senate.split('');
    let i = 0;
    
    while (i < arr.length) {    
        let j = i + 1;
        
        if (arr[i] === 'R') {
            while (j < arr.length) {
                if (arr[j] === 'D') {
                    arr.push('R'); // add senator to the end of the array to either be banned later or vote
                    arr.splice(j, 1); // ban senator of other party
                    break;
                }
                j++;
            }
        }
        else { // this block is the same as above, but for the opposite party
            while (j < arr.length) {
                if (arr[j] === 'R') {
                    arr.push('D');
                    arr.splice(j, 1);
                    break;
                } 
                j++;
            } 
        }
		if (j === senate.length) break; // break early if no senators are left to be banned
        i++;
    }

    if (arr[arr.length - 1] === 'R') { // last element in the array will decide the winning vote
        return 'Radiant'; 
    }
    return 'Dire';
};

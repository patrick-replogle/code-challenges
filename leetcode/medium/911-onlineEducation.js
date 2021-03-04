/*
In an election, the i-th vote was cast for persons[i] at time times[i].

Now, we would like to implement the following query function: TopVotedCandidate.q(int t) will return the number of the person that was 
leading the election at time t.  

Votes cast at time t will count towards our query.  In the case of a tie, the most recent vote (among tied candidates) wins.

Example 1:
Input: ["TopVotedCandidate","q","q","q","q","q","q"], [[[0,1,1,0,0,1,0],[0,5,10,15,20,25,30]],[3],[12],[25],[15],[24],[8]]
Output: [null,0,1,1,0,0,1]
Explanation: 
At time 3, the votes are [0], and 0 is leading.
At time 12, the votes are [0,1,1], and 1 is leading.
At time 25, the votes are [0,1,1,0,0,1], and 1 is leading (as ties go to the most recent vote.)
This continues for 3 more queries at time 15, 24, and 8.
*/

// first pass solution
class TopVotedCandidate {
    constructor(persons, times) {
        this.tuples = this.buildEntries(persons, times);
    }
    buildEntries(persons, times) {
        let tally = {};
        let output = []
        let max = -Infinity;
        let currWinner = null;
        
        for (let i = 0; i < persons.length; i++) {
            let vote = persons[i];
            let time = times[i];
            
            if (!(vote in tally)) {
                tally[vote] = 0;
            }
            tally[vote]++;
            
            if (tally[vote] >= max) {
                max = tally[vote];
                currWinner = vote;
            } 
            output.push([time, currWinner]);
        }
        return output;
    }
    q(t) {
        let low = 0;
        let high = this.tuples.length - 1;
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            if (this.tuples[mid][0] == t) {
                return this.tuples[mid][1];
            } 
            else if (this.tuples[mid][0] < t) {
                low = mid + 1;
            } 
            else {
                high = mid - 1;
            }
        }
        return this.tuples[high][1];
    }
}

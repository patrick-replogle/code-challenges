/*
An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking.
The player with the highest score is ranked number  on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
*/

// first pass solution
function climbingLeaderboard(scores, alice) {
    let arr = [...new Set(scores)].sort((a, b) => b - a);
    let output = [];
    let i = arr.length - 1;
    alice.sort((a, b) => a - b);
    
    for (let score of alice) {
        for (let j = i; j >= 0; j--) {
            if (score < arr[j]) {
                output.push(j + 2);
                i = j;
                break;
            }
            else if (score === arr[j]) {
                output.push(j + 1);
                i = j;
                break;
            }
            else if (j === 0 && score >= arr[j]) {
                output.push(1)
                break;
            } 
        }
    }
    return output;
}


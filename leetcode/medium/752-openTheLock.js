/*
You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. 
The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one 
wheel one slot.

The lock initially starts at '0000', a string representing the state of the 4 wheels.

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and 
you will be unable to open it.

Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the 
lock, or -1 if it is impossible.

Example 1:
Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6
Explanation:
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".

Example 2:
Input: deadends = ["8888"], target = "0009"
Output: 1
Explanation:
We can turn the last wheel in reverse to move from "0000" -> "0009".
*/

// first pass solution using BFS
var openLock = function(deadends, target) {
    let queue = [[[0, 0, 0, 0], 0]];
    let visited = new Set(deadends);

    while (queue.length) {
        let [curr, turns] = queue.shift();
        let joined = curr.join('');
        
        if (joined === target) return turns;
        
        if (!visited.has(joined)) {
            visited.add(joined);
        
            for (let i = 0; i < curr.length; i++) {
                let nextRotationDown = [...curr];
                let nextRotationUp = [...curr];
                nextRotationDown[i] = (nextRotationDown[i] - 1 + 10) % 10;
                nextRotationUp[i] = (nextRotationUp[i] + 1 + 10) % 10;

                if (!visited.has(nextRotationUp.join(''))) {
                    queue.push([nextRotationUp, turns + 1]);
                }
                if (!visited.has(nextRotationDown.join(''))) {
                    queue.push([nextRotationDown, turns + 1]);
                }
            }
        }
    }
    return -1;
};
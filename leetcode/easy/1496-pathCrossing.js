/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return True if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. Return False 
otherwise.

Example 1:
Input: path = "NES"
Output: false 
Explanation: Notice that the path
*/

// first pass solution
var isPathCrossing = function(path) {
    let [x, y] = [0, 0];
    let set = new Set([`${x}:${y}`]);
    
    for (let move of path) {
        if (move === 'N') x++;
        else if (move === 'S') x--;
        else if (move === 'W') y--;
        else if (move === 'E') y++;
        
        if (set.has(`${x}:${y}`)) return true;
        set.add(`${x}:${y}`);
    }
    return false;
};

// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v 
// opens the room with number v.

// Initially, all the rooms start locked (except for room 0). 

// You can walk back and forth between rooms freely.

// Return true if and only if you can enter every room.

// Example 1:

// Input: [[1],[2],[3],[]]
// Output: true
// Explanation:  
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.

// first pass solution using iterative DFT 
var canVisitAllRooms = function(rooms) {
    let visited = new Set();
    let stack = [0];
    
    while (stack.length) {
        let currRoom = stack.pop();
        
        if (!visited.has(currRoom)) {
            visited.add(currRoom);
            if (visited.size === rooms.length) return true;
            
            for (let neighbor of rooms[currRoom]) {
                stack.push(neighbor);
            }
        }
    }
    return false;
};

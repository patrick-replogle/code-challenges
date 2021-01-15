// A robot on an infinite XY-plane starts at point (0, 0) and faces north. The robot can receive one of three possible types of commands:

// -2: turn left 90 degrees,
// -1: turn right 90 degrees, or
// 1 <= k <= 9: move forward k units.
// Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi).

// If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest 
// of the route.)

// Return the maximum Euclidean distance that the robot will be from the origin squared (i.e. if the distance is 5, return 25).

// Note:

// North means +Y direction.
// East means +X direction.
// South means -Y direction.
// West means -X direction.
 

// Example 1:
// Input: commands = [4,-1,3], obstacles = []
// Output: 25
// Explanation: The robot starts at (0, 0):
// 1. Move north 4 units to (0, 4).
// 2. Turn right.
// 3. Move east 3 units to (3, 4).
// The furthest point away from the origin is (3, 4), which is 32 + 42 = 25 units away.

// Example 2:
// Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
// Output: 65
// Explanation: The robot starts at (0, 0):
// 1. Move north 4 units to (0, 4).
// 2. Turn right.
// 3. Move east 1 unit and get blocked by the obstacle at (2, 4), robot is at (1, 4).
// 4. Turn left.
// 5. Move north 4 units to (1, 8).
// The furthest point away from the origin is (1, 8), which is 12 + 82 = 65 units away.

// first pass solution
var robotSim = function(commands, obstacles) {
    let [x, y] = [0, 0];
    let direction = 'N';
    let set = new Set();
    let result = 0;
    
    obstacles.forEach((el) => set.add(el.join(':'))); // add all obstacles to a set
    
    for (let command of commands) {
        if (command === -1 || command === -2) {
            direction = calculateDirection(direction, command); // change robots direction
        } else {
            let [newX, newY] = moveRobot([x, y], direction, command, set); // move robot
            x = newX;
            y = newY;
            result = Math.max((x * x) + (y * y), result); // update maximum distance
        } 
    }
    return result;
};
    
var calculateDirection = function(start, direction) {
    if (direction === -1) {
        if (start === 'N') return 'E';
        if (start === 'S') return 'W';
        if (start === 'W') return 'N';
        if (start === 'E') return 'S';
    } 
    else if (direction === -2) {
        if (start === 'N') return 'W'
        if (start === 'S') return 'E'
        if (start === 'W') return 'S'
        if (start === 'E') return 'N'
    }
}

var moveRobot = function (start, direction, command, set) {
    let [x, y] = start;
    let [newEast, newWest, newNorth, newSouth] = [x + command, x - command, y + command, y - command];

    if (direction === 'N') {
        while (!set.has([x, y + 1].join(':')) && y !== newNorth) y++;
    }
    else if (direction === 'S') {
        while (!set.has([x, y - 1].join(':')) && y !== newSouth) y--;
    } 
    else if (direction === 'E') {
        while (!set.has([x + 1, y].join(':')) && x !== newEast) x++;
    }
    else if (direction === 'W') {
        while (!set.has([x - 1, y].join(':')) && x !== newWest) x--;
    }
    return [x, y];
}


    

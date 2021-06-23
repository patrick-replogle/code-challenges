// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] 
// is the distance between the stops number i and (i + 1) % n.

// The bus goes along both directions i.e. clockwise and counterclockwise.

// Return the shortest distance between the given start and destination stops.

// Example 1:
// Input: distance = [1,2,3,4], start = 0, destination = 1
// Output: 1
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

// first pass solution
var distanceBetweenBusStops = function(distance, start, destination) {
    let clockwise = 0;
    let counterClockwise = 0;
    let i = start;
    
    while (i !== destination) {
        clockwise += distance[i];
        i++;
        if (i === distance.length) {
            i = i % distance.length;
        }
    }
    
    i = destination;
    
    while (i !== start) {
        counterClockwise += distance[i];
        i++;
        if (i === distance.length) {
            i = i % distance.length;
        }
    }
    
    return Math.min(clockwise, counterClockwise);
};

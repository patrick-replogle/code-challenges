/*
Function Description

Complete the flatlandSpaceStations function in the editor below.

flatlandSpaceStations has the following parameter(s):

int n: the number of cities
int c[m]: the indices of cities with a space station
Returns
- int: the maximum distance any city is from a space station
*/

// first pass solution
function flatlandSpaceStations(n, c) {
    let maxDistance = 0;
    
    for (let i = 0; i < n; i++) {
        let closest = Infinity;
        for (let stationIdx of c) {
            closest = Math.min(closest, Math.abs(stationIdx - i));
        }
        maxDistance = Math.max(maxDistance, closest);
    }
    return maxDistance;
}

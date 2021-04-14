/*
A driver is driving on the freeway. The check engine light of his vehicle is on, and the driver wants to get service immediately. Luckily, 
a service lane runs parallel to the highway. It varies in width along its length.

Function Description

Complete the serviceLane function in the editor below.

serviceLane has the following parameter(s):

int n: the size of the  array
int cases[t][2]: each element contains the starting and ending indices for a segment to consider, inclusive
Returns

int[t]: the maximum width vehicle that can pass through each segment of the service lane described
*/

// first pass solution
function serviceLane(n, widths, cases) {
    let output = [];
    
    for (let [x, y] of cases) {
        let min = widths[x];
        
        for (let i = x + 1; i <= y; i++) {
            min = Math.min(min, widths[i]);
        }
        output.push(min);
    } 
    return output
}

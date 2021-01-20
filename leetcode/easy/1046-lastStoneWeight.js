// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result 
// of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

// Example 1:
// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

// first pass solution
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        let max = Math.max(...stones);
        let maxIndex = stones.indexOf(max);
        let secondMax = -Infinity;
        
        for (let i = 0; i < stones.length; i++) {
            if (i === maxIndex) continue;
            secondMax = Math.max(secondMax, stones[i]);
        }
        if (max === secondMax) {
            stones.splice(maxIndex, 1);
            stones.splice(stones.indexOf(secondMax), 1);
        } else {
            stones[maxIndex] = Math.abs(max - secondMax);
            stones.splice(stones.indexOf(secondMax), 1);
        }
    }
    return (stones.length ? stones[0] : 0);
};

// second pass solution using the sort method
var lastStoneWeight = function(stones) {   
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        let max = stones.pop();
        let secondMax = stones.pop();
        if (max === secondMax) continue;
        stones.push(Math.abs(max - secondMax));
    }
    return (stones.length ? stones[0] : 0);
};

// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", 
// "Silver Medal" and "Bronze Medal".

// Example 1:
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
// For the left two athletes, you just need to output their relative ranks according to their scores.

// first pass solution
var findRelativeRanks = function(nums) {
    let output = [];
    let rankedNums = [...nums].sort((a, b) => b - a);

    for (let i = 0; i < nums.length; i++) {
        let idx = rankedNums.indexOf(nums[i]);
        
        if (idx === 0) output.push("Gold Medal");
        else if (idx === 1) output.push("Silver Medal");
        else if (idx === 2) output.push("Bronze Medal");
        else output.push(String(idx + 1));
    }
    return output;
};

// second pass solution
var findRelativeRanks = function(nums) {
    let output = new Array(nums.length).fill(0);
    let dict = {}
    
    for (let i = 0; i < nums.length; i++) {
        dict[i] = nums[i];
    }
    
    let entries = Object.entries(dict).sort((a, b) => b[1] - a[1]);
    
    for (let i = 0; i < entries.length; i++) {
        if (i === 0) output[entries[i][0]] = "Gold Medal";
        else if (i === 1) output[entries[i][0]] = "Silver Medal";
        else if (i === 2) output[entries[i][0]] = "Bronze Medal";
        else output[entries[i][0]] = String(i + 1);
    }
    return output
};

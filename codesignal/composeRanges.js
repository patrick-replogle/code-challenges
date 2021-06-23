/*
Given a sorted integer array that does not contain any duplicates, return a summary of the number ranges it contains.

Example

For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be
composeRanges(nums) = ["-1->2", "6->7", "9"].
*/

// first pass solution
function composeRanges(nums) {
    let output = [];
    let i = 0
    
    while (i < nums.length) {
        let start = nums[i];
        let j = i;
        while (j < nums.length && nums[j] + 1 === nums[j+1]) {
            j++;
        }
        if (i === j) output.push(String(nums[i]));
        else output.push(`${nums[i]}->${nums[j]}`)
        i = j + 1;
    }
    return output;
}

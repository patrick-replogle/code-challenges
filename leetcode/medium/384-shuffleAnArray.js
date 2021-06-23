/*
Given an integer array nums, design an algorithm to randomly shuffle the array.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.
 
Example 1:
Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must be equally likely to 
be returned. Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]
*/

// first pass solution => create all permuations, then select a random permutation to return (this solution times out)
class Solution {
    constructor(nums) {
        this.nums = nums;
        this.permutations = [];
        this.createPermutations();
    }
    reset() {
        return this.nums;
    }
    shuffle() {
        let random = Math.floor(Math.random() * (this.permutations.length));
        return this.permutations[random];
    }
    createPermutations() {
        function permute(path, options, results) {
            if (options.length === 0) {
                return results.push(path);
            }
            for (let i = 0; i < options.length; i++) {
                permute([...path, options[i]], [...options.slice(0, i), ...options.slice(i + 1)], results);
            }
        }
        permute([], this.nums, this.permutations);
    }
}

// second pass solution 
class Solution {
    constructor(nums) {
        this.nums = nums;
        this.shuffled = [...nums];
    }
    reset() {
        return this.nums;
    }
    shuffle() {
        for (let i = 0; i < this.shuffled.length; i++) {
            let j = Math.floor(Math.random() * (this.nums.length));
            [this.shuffled[i], this.shuffled[j]] = [this.shuffled[j], this.shuffled[i]];
        }
        return this.shuffled;
    }
}

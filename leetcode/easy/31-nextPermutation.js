// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

// The replacement must be in place and use only constant extra memory.

var nextPermutation = function(nums) {
    let i = nums.length - 1;
    // find largest num in non-ascending number => in [0, 1, 2, 5, 3, 3, 0] = 5
    while (i > 0 && nums[i - 1] >= nums[i]) i--;
    // check if we are at last permutation already => [3, 2, 1] => if so return nums.sort()
    if (i <= 0) return nums.sort((a, b) => a - b);
    let j = nums.length - 1;
    // make i - 1 our pivot; 
    // find rightmost index of element that is greater than pivot
    while (nums[j] <= nums[i-1]) j--;
    // now swap pivot with greater element
    [nums[i-1], nums[j]] = [nums[j], nums[i-1]];
    // now we swap all element to left of pivot
    j = nums.length - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++;
        j--;
    }

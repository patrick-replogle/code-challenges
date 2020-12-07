// You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers 
// for nums1's elements in the corresponding places of nums2.

// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this 
// number.

// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
// Output: [-1,3,-1]
// Explanation:
//     For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
//     For number 1 in the first array, the next greater number for it in the second array is 3.
//     For number 2 in the first array, there is no next greater number for it in the second array, so output -1.

// first pass solution
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    
    for (let i = 0; i < nums1.length; i++) {
        let j = 0;
        
        while (nums2[j] !== nums1[i]) j++;
        while (nums2[j] <= nums1[i]) j++;
        
        if (!nums2[j]) result.push(-1);
        else result.push(nums2[j]);
    }  
    return result;
};

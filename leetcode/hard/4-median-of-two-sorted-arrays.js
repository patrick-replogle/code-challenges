// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    let len = arr.length;
    let median = Math.floor(len / 2);
    
    arr.sort((a, b) => a - b);
    
    if (len % 2 === 0) {
        return (arr[median-1] + arr[median]) / 2;
    } else {
        return arr[median];
    }
};
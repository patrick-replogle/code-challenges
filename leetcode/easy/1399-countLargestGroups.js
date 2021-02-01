/*
Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

Return how many groups have the largest size.

Example 1:
Input: n = 13
Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.
*/

// first pass solution 
var countLargestGroup = function(n) {
    let count = {};
    let largestSize = -Infinity;
    
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        count[sum] ? count[sum].push(i) : count[sum] = [i];
        if (count[sum].length > largestSize) {
            largestSize = count[sum].length;
        }
    }
    return Object.values(count).filter(arr => arr.length === largestSize).length;
};

// second pass solution
var countLargestGroup = function(n) {
    let count = {};
    let largestSize = -Infinity;
    let output = 0;
    
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        count[sum] ? count[sum].push(i) : count[sum] = [i];
        if (count[sum].length > largestSize) {
            largestSize = count[sum].length;
        }
    }
    
    for (let key in count) {
        if (count[key].length === largestSize) {
            output++;
        }
    }
    return output++;
};

// third pass solution
var countLargestGroup = function(n) {
    let count = {};
    let largestSize = -Infinity;
    let output = 0;
    
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        count[sum] ? count[sum] += 1 : count[sum] = 1;
        if (count[sum] > largestSize) {
            largestSize = count[sum];
        }
    }
    
    for (let key in count) {
        if (count[key] === largestSize) {
            output++;
        }
    }
    return output++;
};

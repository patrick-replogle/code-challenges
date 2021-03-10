/*
We sampled integers in the range [0, 255] and stored the results in an array count where count[k] is the number of integers we sampled equal to k.

Return the minimum, maximum, mean, median, and mode of the sample respectively, as an array of floating-point numbers. Answers within 10-5 of the 
actual answer will be considered accepted.

The mode is guaranteed to be unique.

The median of a sample is:

The middle element, if the elements of the sample were sorted and the number of elements is odd, or
The average of the middle two elements, if the elements of the sample were sorted and the number of elements is even.

Example 1:
Input: count = [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0]
Output: [1.00000,3.00000,2.37500,2.50000,3.00000]

Example 2:
Input: count = [0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0]
Output: [1.00000,4.00000,2.18182,2.00000,1.00000]
*/

// first pass solution
var sampleStats = function(count) {
    let min = Infinity;
    let max = -Infinity;
    let mode = [0, 0]; 
    let sum = 0;
    let len = 0;
    let arr = []; 
    
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            min = Math.min(i, min);
            max = Math.max(i, max);
            sum += count[i] * i;
            len += count[i];
            if (mode[1] < count[i]) mode = [i, count[i]];
            if (!arr.length) {
                arr.push([i, 0, count[i] - 1]); 
            } else {
                let prev = arr[arr.length - 1][2];
                arr.push([i, prev + 1, prev + 1 + count[i] - 1]);
            }
        }
    }
    
    let mid = Math.floor(len / 2); // middle index
    let even = len % 2 === 0; // boolean
    let median = null;
    
    for (let i = 0; i < arr.length; i++) {
        let [val, start, end] = arr[i];
        if (mid >= start && mid <= end) {
            if (!even) {
                median = val;
            }
            else {
                if ((mid - 1) < start) {
                    median = (arr[i-1][0] + val) / 2;
                } else {
                    median = (val + val) / 2;
                } 
            }
            break;
        }
    }
    return [min, max, sum / len, median, mode[0]]
};

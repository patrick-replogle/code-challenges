// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Example 1:
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// first pass solution
var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];
    
    for (let num of A) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }
    return even.contact(odd);
};

// second pass solution
var sortArrayByParity = function(A) {
    let left = 0;
    let right = A.length - 1;
    
    while (left < right) {
        if (A[left] % 2 !== 0) {
            [A[left], A[right]] = [A[right], A[left]];
            right--;
        } else {
            left++;
        }
    }
    return A;
};

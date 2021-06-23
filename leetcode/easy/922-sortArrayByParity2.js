// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.

// Example 1:
// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// first pass solution using two stacks
var sortArrayByParityII = function(A) {
    let even = [];
    let odd = [];
    let flag = true;
    
    for (let num of A) {
        if (num % 2 === 0) even.push(num);
        else odd.push(num);
    }
    
    for (let i = 0; i < A.length; i++) {
        if (flag) A[i] = even.pop();
        else A[i] = odd.pop();
        flag = !flag;
    }
    return A;
};

// second pass solution using a single pass thru the array
var sortArrayByParityII = function(A) {
    let output = new Array(A.length).fill(0);
    let even = 0;
    let odd = 1;
    
    for (let num of A) {
        if (num % 2 === 0) {
            output[even] = num;
            even += 2;
        } else {
            output[odd] = num;
            odd += 2;
        }
    }
    return output;
};

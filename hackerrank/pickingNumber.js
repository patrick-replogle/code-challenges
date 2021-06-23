// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

// first pass solution
function pickingNumbers(a) {
    let output = 0;
    
    for (let i = 0; i < a.length - 1; i++) {
        let low = 1;
        let high = 1;
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] === a[i] || a[j] === a[i] - 1) low++;
            if (a[j] === a[i] || a[j] === a[i] + 1) high++;
        }
        output = Math.max(output, low, high);
    }
    return output;
}

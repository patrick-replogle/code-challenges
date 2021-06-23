// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    let sumOfAll = arr.reduce((a, b) => a + b);
    let max = -Infinity;
    let min = Infinity;

    arr.forEach((val) => {
        max = Math.max(max, sumOfAll - val);
        min = Math.min(min, sumOfAll - val);
    });
    console.log(min, max);
}

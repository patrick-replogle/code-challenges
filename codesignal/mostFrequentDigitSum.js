// A step(x) operation works like this: it changes a number x into x - s(x), where s(x) is the sum of x's digits. You like applying functions 
// to numbers, so given the number n, you decide to build a decreasing sequence of numbers: n, step(n), step(step(n)), etc., with 0 as the 
// last element.

// Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits (s(x)). Now 
// you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one.

// Example

// For n = 88, the output should be
// mostFrequentDigitSum(n) = 9.

// Here is the first sequence you built: 88, 72, 63, 54, 45, 36, 27, 18, 9, 0;
// And here is s(x) for each of its elements: 16, 9, 9, 9, 9, 9, 9, 9, 9, 0.
// As you can see, the most frequent number in the second sequence is 9.

function mostFrequentDigitSum(n) {
    let dict = {};
    let maxFreqCount = 0;
    let returnVal = "";
    
    while (n > 0) {
        let currSum = eval(String(n).split("").join("+"));
        if (!(currSum in dict)) {
            dict[currSum] = 0;
        }
        dict[currSum] += 1;
        n = n - (eval(String(n).split("").join("+")));
    }
    
    for (key in dict) {
        if (dict[key] > maxFreqCount) {
            maxFreqCount = dict[key];
            returnVal = key;
        } else if (dict[key] === maxFreqCount && key > returnVal) {
            returnVal = key;
        }
    }
    return Number(returnVal);
}

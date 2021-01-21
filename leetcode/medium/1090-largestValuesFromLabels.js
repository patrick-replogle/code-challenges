// We have a set of items: the i-th item has value values[i] and label labels[i].

// Then, we choose a subset S of these items, such that:

// |S| <= num_wanted
// For every label L, the number of items in S with label L is <= use_limit.
// Return the largest possible sum of the subset S.

// Example 1:
// Input: values = [5,4,3,2,1], labels = [1,1,2,2,3], num_wanted = 3, use_limit = 1
// Output: 9
// Explanation: The subset chosen is the first, third, and fifth item.

// Example 2:
// Input: values = [5,4,3,2,1], labels = [1,3,3,3,2], num_wanted = 3, use_limit = 2
// Output: 12
// Explanation: The subset chosen is the first, second, and third item.

// Example 3:
// Input: values = [9,8,8,7,6], labels = [0,0,0,1,1], num_wanted = 3, use_limit = 1
// Output: 16
// Explanation: The subset chosen is the first and fourth item.

// Example 4:
// Input: values = [9,8,8,7,6], labels = [0,0,0,1,1], num_wanted = 3, use_limit = 2
// Output: 24
// Explanation: The subset chosen is the first, second, and fourth item.

// first pass solution => ugly, but it passes the tests
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
    let dict = {};
    let taken = {};
    let output = 0;
    
    for (let i = 0; i < values.length; i++) {
        if (!(labels[i] in dict)) {
            dict[labels[i]] = [];
            taken[labels[i]] = 0;
        }
        dict[labels[i]].push(values[i]);
    }
    
    for (let key in dict) {
        dict[key].sort((a, b) => a - b);
    }

    while (num_wanted > 0) {
        let max = -Infinity;
        let maxGroup = '';
        for (let key in dict) {
            let len = dict[key].length - 1;
            if (max < dict[key][len] && taken[key] < use_limit) {
                max = dict[key][len];
                maxGroup = key;
            }
        }
        if (max === -Infinity) break;
        
        output += dict[maxGroup].pop();
        taken[maxGroup] += 1;
        num_wanted -= 1;
        
        if (taken[maxGroup] === use_limit) {
            delete taken[maxGroup];
            delete dict[maxGroup];
        }
    }
    return output;
};

// second pass solution => similar as the first, but sorts the array into tuples [value, label] instead of creating a dict of sorted arrays as values
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
    let usedCount = {};
    let output = 0;
    
    let sortedGroups = values.map((num, i) => [num, labels[i]]).sort((a, b) => b[0] - a[0]);
    
    for (let [value, label] of sortedGroups) {
        if (!(label in usedCount)) {
            usedCount[label] = 0;
        }
        if (num_wanted > 0 && usedCount[label] < use_limit) {
            output += value;
            usedCount[label]++;
            num_wanted--;
            if (num_wanted === 0) break;
        }
    }
    return output;
};

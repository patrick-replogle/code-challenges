// In a row of trees, the i-th tree produces fruit with type tree[i].

// You start at any tree of your choice, then repeatedly perform the following steps:

// Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
// Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, 
// then step 2, and so on until you stop.

// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

// What is the total amount of fruit you can collect with this procedure?

// Example 1:

// Input: [1,2,1]
// Output: 3
// Explanation: We can collect [1,2,1].
// Example 2:

// Input: [0,1,2,2]
// Output: 3
// Explanation: We can collect [1,2,2].
// If we started at the first tree, we would only collect [0, 1].

// first pass solutiion
var totalFruit = function(tree) {
    let max = 0;
    
    for (let i = 0; i < tree.length; i++) {
        let set = new Set();
        let curr = 0;
        
        for (let j = i; j < tree.length; j++) {
            set.add(tree[j]);
            if (set.size > 2) break;
            
            curr++;
            max = Math.max(max, curr);
            if (j === tree.length - 1) return max;
        }
    }
    return max;
};


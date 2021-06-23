/*
A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time.

Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level  
i.e.  time[i]*satisfaction[i]

Return the maximum sum of Like-time coefficient that the chef can obtain after dishes preparation.

Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.

Example 1:
Input: satisfaction = [-1,-8,0,5,-9]
Output: 14
Explanation: After Removing the second and last dish, the maximum total Like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14). Each 
dish is prepared in one unit of time.
*/

// first pass solution
var maxSatisfaction = function(satisfaction) {
    let maxSatisfaction = -Infinity;
    let subtracted = 0;
    satisfaction.sort((a, b) => a - b);

    for (let i = 0; i < satisfaction.length; i++) {
        let currSatisfaction = 0;
        for (let j = i; j < satisfaction.length; j++) {
            currSatisfaction += (j + 1 - subtracted) * satisfaction[j];
        }
        maxSatisfaction = Math.max(maxSatisfaction, currSatisfaction);
        subtracted++;
    }
    return maxSatisfaction > 0 ?  maxSatisfaction : 0;
};

// second pass solution
var maxSatisfaction = function(satisfaction) {
    let maxSatisfaction = -Infinity;
    satisfaction.sort((a, b) => a - b);

    while (satisfaction.length) {
        let currSatisfaction = 0;
        
        satisfaction.forEach((num, i) => {
            currSatisfaction += num * (i+1);
        });
        
        maxSatisfaction = Math.max(maxSatisfaction, currSatisfaction);
        satisfaction.shift();
    }
    return maxSatisfaction > 0 ?  maxSatisfaction : 0;
};

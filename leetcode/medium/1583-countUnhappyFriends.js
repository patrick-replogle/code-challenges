/*
You are given a list of preferences for n friends, where n is always even.

For each person i, preferences[i] contains a list of friends sorted in the order of preference. In other words, a friend earlier in the list 
is more preferred than a friend later in the list. Friends in each list are denoted by integers from 0 to n-1.

All the friends are divided into pairs. The pairings are given in a list pairs, where pairs[i] = [xi, yi] denotes xi is paired with yi and yi 
is paired with xi.

However, this pairing may cause some of the friends to be unhappy. A friend x is unhappy if x is paired with y and there exists a friend u who 
is paired with v but:

x prefers u over y, and
u prefers x over v.
Return the number of unhappy friends.

Example 1:
Input: n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]
Output: 2
Explanation:
Friend 1 is unhappy because:
- 1 is paired with 0 but prefers 3 over 0, and
- 3 prefers 1 over 2.
Friend 3 is unhappy because:
- 3 is paired with 2 but prefers 1 over 2, and
- 1 prefers 3 over 0.
Friends 0 and 2 are happy.
*/

// first pass solution => very brute force
var unhappyFriends = function(n, preferences, pairs) {
    let set = new Set();
    
    for (let i = 0; i < pairs.length; i++) {  
        for (let j = i + 1; j < pairs.length; j++) {      
            let [x1, y1] = pairs[i];
            let [x2, y2] = pairs[j];
            checkIfHappy(x1, y1, x2, y2, set, preferences);
            checkIfHappy(x2, y2, x1, y1, set, preferences);
        }
    }
    return set.size;
};

var checkIfHappy = function(x1, y1, x2, y2, set, preferences) {
        if (preferences[x1].indexOf(y1) > preferences[x1].indexOf(x2) && 
            preferences[x2].indexOf(x1) < preferences[x2].indexOf(y2)) 
            {
                set.add(x1);
            }
        else if (preferences[x1].indexOf(y1) > preferences[x1].indexOf(y2) && 
            preferences[y2].indexOf(x1) < preferences[y2].indexOf(x2)) 
            {
                set.add(x1);
            }
        if (preferences[y1].indexOf(x1) > preferences[y1].indexOf(x2) && 
            preferences[x2].indexOf(y1) < preferences[x2].indexOf(y2)) 
            {
                set.add(y1);
            }
        else if (preferences[y1].indexOf(x1) > preferences[y1].indexOf(y2) && 
            preferences[y2].indexOf(y1) < preferences[y2].indexOf(x2)) 
            {
                set.add(y1)
            }
}

// second pass solution => still brute force, but twice as fast as first solution
var unhappyFriends = function(n, preferences, pairs) {
    let set = new Set();
    
    let matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {  
        for (let j = 0; j < preferences[0].length; j++) {  
            matrix[i][preferences[i][j]] = j;
            matrix[i][i] = n;
        }
    }
    
    for (let i = 0; i < pairs.length; i++) {  
        for (let j = i + 1; j < pairs.length; j++) {      
            let [x1, y1] = pairs[i];
            let [x2, y2] = pairs[j];
            checkIfHappy(x1, y1, x2, y2, set, matrix);
            checkIfHappy(x2, y2, x1, y1, set, matrix);
        }
    }
    return set.size;
};

var checkIfHappy = function(x1, y1, x2, y2, set, matrix) {
    if (matrix[x1][y1] > matrix[x1][x2] && matrix[x2][x1] < matrix[x2][y2]) {
            set.add(x1);
        }
    else if (matrix[x1][y1] > matrix[x1][y2] && matrix[y2][x1] < matrix[y2][x2]) {
            set.add(x1);
        }
    if (matrix[y1][x1] > matrix[y1][x2] && matrix[x2][y1] < matrix[x2][y2]) {
            set.add(y1);
        }
    else if (matrix[y1][x1] > matrix[y1][y2] && matrix[y2][y1] < matrix[y2][x2]) {
            set.add(y1)
        }
}

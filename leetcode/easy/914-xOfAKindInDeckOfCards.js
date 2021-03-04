/*
In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.
 
Example 1:
Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

Example 2:
Input: deck = [1,1,1,2,2,2,3,3]
Output: false´
Explanation: No possible partition.

Example 3:
Input: deck = [1]
Output: false
Explanation: No possible partition.
*/

// first pass solution
var hasGroupsSizeX = function(deck) { 
    let count = {};  
    
    for (let card of deck) {
        if (!(card in count)) {
            count[card] = 0;
        }
        count[card]++;
    }
    let x = Math.min(...Object.values(count));
    if (x < 2) return false;
    
    for (let divisor of [2, 3, 5, 7]) {
        let flag = true;
        for (let key in count) {
            if (count[key] % divisor !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) return true;
    }
    return false;
};

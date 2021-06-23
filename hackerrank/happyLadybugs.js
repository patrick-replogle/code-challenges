/*
Function Description

Complete the happyLadybugs function in the editor below.

happyLadybugs has the following parameters:

string b: the initial positions and colors of the ladybugs
Returns

string: either YES or NO
*/

// first pass solution
function happyLadybugs(b) {
    if (b.replace(/_/g, '').length === 0) return 'YES';
    
    if (b.indexOf('_') === -1) {
        for (let i = 0; i < b.length; i++) {
            if (b[i] === b[i-1] || b[i] === b[i+1]) continue;
            return 'NO';
        }
        return 'YES';
    }
    
    let dict = {};
    let flag = false;
    
    for (let char of b) {
        if (!(char in dict)) {
            dict[char] = 0;
        }
        dict[char] += 1;
    }
    
    for (let key in dict) {
        if (key !== '_' && dict[key] === 1) return 'NO';
        if (key === '_') flag = true;
    }
    return flag ? 'YES' : 'NO';
}

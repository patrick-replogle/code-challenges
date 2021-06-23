// Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

// type indicates if it's a left or a right shoe;
// size is the size of the shoe.
// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a 
// left shoe of an equal size.

// Example

// For:

// shoes = [[0, 21], 
//          [1, 23], 
//          [1, 21], 
//          [0, 23]]
// the output should be
// pairOfShoes(shoes) = true;

function pairOfShoes(shoes) {
    let pairs = {};
    
    for (let shoe of shoes) {
        if (!(shoe[1] in pairs)) {
            pairs[shoe[1]] = [shoe[0]];
        } else {
            pairs[shoe[1]].push(shoe[0]);
        }
    }
    
    for (let key in pairs) {
        if (pairs[key].length % 2 !== 0) return false;
        
        let leftCount = 0;
        let rightCount = 0;
        
        for (let size of pairs[key]) {
            if (size === 0) leftCount++;
            else if (size === 1) rightCount++;
            else if (size !== 0 || size !== 1) return false; 
        }
        if (leftCount !== rightCount) return false;
    }
    return true;
}

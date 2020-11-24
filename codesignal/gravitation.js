// You are given a vertical box divided into equal columns. Someone dropped several stones from its top through the columns. Stones are 
// falling straight down at a constant speed (equal for all stones) while possible (i.e. while they haven't reached the ground or they are 
// not blocked by another motionless stone). Given the state of the box at some moment in time, find out which columns become motionless first.

// Example

// For

// rows = ["#..##",
//         ".##.#",
//         ".#.##",
//         "....."]
// the output should be gravitation(rows) = [1, 4].

// first pass solution
function gravitation(rows) {
    let dict = {};
    let result = [];
    
    for (let i = 0; i < rows[0].length; i++) {
        if (!(i in dict)) dict[i] = 0; // create a key/value pair for each column
        
        let count = 0 // number of seconds for column to become motionless
        let flag = false; // flag to find first stone in column
        
        for (let j = 0; j < rows.length; j++) {
            if (rows[j][i] === "#") {
                flag = true;
                continue;
            }
            if (flag && rows[j][i] === ".") count++; // count each "." in column after first stone occurs
        }
        dict[i] = count; // asign the number of seconds for column to become motionless
    }
    
    let min = Math.min(...Object.values(dict)); // find which column is motionless first
    
    for (let key in dict) {
        if (dict[key] === min) {
            result.push(Number(key)); // return all columns that match min time to become motionless
        } 
    }
    return result;
}

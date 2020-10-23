// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes 
// later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

// Example

// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

function fileNaming(names) {
    let result = [];
    let dict = {}
    
    for (let name of names) {
        if (!(name in dict)) {
            dict[name] = 1;
            result.push(name);
            
        } else {    
            let j = 1;
            let temp = `${name}(${j})`
            
            while (temp in dict) {
                j++;
                temp = `${name}(${j})`
            }
            result.push(temp)
            dict[temp] += 1
        }
    }
    return result;
}

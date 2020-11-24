// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the 
// people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// first pass solution using selection sort
function sortByHeight(a) {   
    for (let i = 0; i < a.length ; i++) {
        if (a[i] === -1) continue;
        
        let j = i;
        let lowest = i;
        
        while (j < a.length) {
            if (a[j] !== -1 && a[j] < a[lowest]) lowest = j; 
            j++;
        }
        [a[i], a[lowest]] = [a[lowest], a[i]];
    }
    return a;
}

// second pass solution 
function sortByHeight(a) {   
    let filterArr = a.filter((curr) => curr !== -1)
        .sort((a, b) => b - a);
        
    for (let i in a) {
        if (a[i] !== -1) {
            a[i] = filterArr.pop();
        }
    }
    return a;
}

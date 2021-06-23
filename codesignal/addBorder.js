// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder(picture) {
    let topAndBottom = "*".repeat(picture[0].length + 2);
    let result = [topAndBottom];
    
    for (let str of picture) {
        result.push("*" + str + "*");
    }
    result.push(topAndBottom);
    
    return result;
}

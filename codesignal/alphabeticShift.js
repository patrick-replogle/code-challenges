// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString) {
    inputString = inputString.split("");
    
    for (let i = 0; i < inputString.length; i++) {
        if(inputString[i] === "z") {
            inputString[i] = "a";
        } else {
            inputString[i] = String.fromCharCode(inputString[i].charCodeAt(0) + 1);
        }
    }
    return inputString.join("");
}

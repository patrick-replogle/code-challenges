// Determine whether the given string can be obtained by one concatenation of some string to itself.

function isTandemRepeat(inputString) {
    let firstHalf = inputString.slice(0, inputString.length / 2);
    let secondHalf = inputString.slice(inputString.length / 2);
    
    if (firstHalf === secondHalf) {
        return true;
    }
    return false;
}

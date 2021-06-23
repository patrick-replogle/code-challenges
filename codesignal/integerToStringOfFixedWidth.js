// Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to 
// do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.

// Example

// For number = 1234 and width = 2, the output should be
// integerToStringOfFixedWidth(number, width) = "34";
// For number = 1234 and width = 4, the output should be
// integerToStringOfFixedWidth(number, width) = "1234";
// For number = 1234 and width = 5, the output should be
// integerToStringOfFixedWidth(number, width) = "01234".

function integerToStringOfFixedWidth(number, width) {
    number = String(number);
    let difference = number.length - width;
    
    if (difference > 0) {
        return number.slice(difference);
    } else if (difference < 0) {
        return "0".repeat(Math.abs(difference)) + number;
    } else {
        return number;
    }
}

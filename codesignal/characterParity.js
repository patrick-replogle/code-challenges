// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

// Example

// For symbol = '5', the output should be
// characterParity(symbol) = "odd";
// For symbol = '8', the output should be
// characterParity(symbol) = "even";
// For symbol = 'q', the output should be
// characterParity(symbol) = "not a digit".

function characterParity(symbol) {
    let checkSymbol = Number(symbol % 2);

    if (Number.isNaN(checkSymbol)) return "not a digit";
    else if (checkSymbol === 0) return "even";
    else return "odd";
}

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each 
// fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute 
// error of up to  are acceptable.

function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;

    arr.forEach((val) => {
        if (val === 0) zero++;
        else if (val > 0) pos++;
        else if (val < 0) neg++;
    })
    console.log(parseFloat(pos / arr.length).toFixed(6));
    console.log(parseFloat(neg / arr.length).toFixed(6));
    console.log(parseFloat(zero / arr.length).toFixed(6));
}

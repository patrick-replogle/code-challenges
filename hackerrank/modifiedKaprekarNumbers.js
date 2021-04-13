/*
A modified Kaprekar number is a positive whole number with a special property. If you square it, then split the number into two integers and 
sum those integers, you have the same value you started with.

Consider a positive whole number  with  digits. We square  to arrive at a number that is either  digits long or  digits long. Split the string 
representation of the square into two parts,  and . The right hand part,  must be  digits long. The left is the remaining substring. Convert those 
two substrings back to integers, add them and see if you get .
*/

// first pass solution
function kaprekarNumbers(p, q) {
    let nums = [];
    
    for (let i = p; i <= q; i++) {
        let str = String(i * i);
        let mid = Math.floor(str.length / 2);
        let left = Number(str.slice(0, mid));
        let right = Number(str.slice(mid));
        
        if (left + right === i) {
            nums.push(i);
        }
    }
    if (!nums.length) {
        console.log('INVALID RANGE');
    }
    console.log(nums.join(' '));
}

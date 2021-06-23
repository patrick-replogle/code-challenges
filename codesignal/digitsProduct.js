// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. 
If there is no such integer, return -1 instead.

// Example

// For product = 12, the output should be
// digitsProduct(product) = 26;
// For product = 19, the output should be
// digitsProduct(product) = -1

function digitsProduct(product) {
    for (let i = 1; i < 4000; i++)   
        let temp = String(i).split("").join("*");
        
        if (eval(temp) === product) {
            return i;
        }
    }
    return -1;
}

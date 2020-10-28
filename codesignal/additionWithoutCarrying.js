// A little boy is studying arithmetic. He has just learned how to add two integers, written one below another, column by column. 
// But he always forgets about the important part - carrying.

// Given two integers, your task is to find the result which the little boy will get.

// Note: The boy had learned from this site, so feel free to check it out too if you are not familiar with column addition.

// Example

// For param1 = 456 and param2 = 1734, the output should be
// additionWithoutCarrying(param1, param2) = 1180.

//    456
//   1734
// + ____
//   1180

// solution 1
function additionWithoutCarrying(param1, param2) {
    param1 = String(param1).split("").reverse();
    param2 = String(param2).split("").reverse();
    let result = [];
    let i = 0;
    
    while (i < param1.length || i < param2.length) {
        let temp1 = param1[i] ? param1[i] : 0
        let temp2 = param2[i] ? param2[i] : 0
        let temp = Number(temp1) + Number(temp2);
        
        if (temp >= 10){ 
            result.push(temp % 10);
        } else {
          result.push(temp);  
        }
        i++;
    }
    return Number(result.reverse().join(""));
}

// solution 2
function additionWithoutCarrying(param1, param2) {
    let result = "";
    
    while (param1 > 0 || param2 > 0) {
        let currDigit = (param1 % 10) + (param2 % 10);

        if (currDigit >= 10) {
            result = result + (currDigit % 10);
        } else {
            result = result + currDigit;
        };
        param1 = Math.floor(param1 / 10);
        param2 = Math.floor(param2 / 10);
    }
    return Number(result.split("").reverse().join(""));
}

var minElement = function(nums) {
    let minElem = Number.MAX_VALUE;

    nums.forEach(num => {
        let sum = 0;
        
        while (num > 0) {
            let digit = num % 10;
            sum += digit;
            num = Math.floor(num / 10)
        }
        
        minElem = Math.min(minElem, sum);
    });


    return minElem;
};

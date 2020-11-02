// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
    let maxHeight = Math.max(...candles);
    let sum = 0;

    candles.forEach((val) => {
        if (val === maxHeight) sum++;
    });
    return sum;
}

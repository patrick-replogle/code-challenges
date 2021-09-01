function possibleSums(coins, quantity) {
    let sums = new Set([0]);
    
    for (let i = 0; i < coins.length; i++) {
        let arr = [...sums];
        for (let sum of arr) {
            for (let j = 1; j <= quantity[i]; j++) {
                sums.add(sum + (coins[i] * j));
            }
        }
        
    }
    return sums.size - 1;
}

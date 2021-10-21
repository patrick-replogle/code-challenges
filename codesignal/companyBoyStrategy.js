function companyBotStrategy(trainingData) {
    let sum = 0;
    let count = 0;
    
    for (let tuple of trainingData) {
        if (tuple[1] === 1) {
            sum += tuple[0];
            count++;
        }
    }
    
    return sum / count ? sum / count : 0;
}

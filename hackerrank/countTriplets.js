function countTriplets(arr, r) {
    let output = 0;
    let dict = {};
    let pairDict = {};
    
    for (let i = arr.length - 1; i >= 0; i--) {
        let midNum = r * arr[i];
        let thirdNum = r * r * arr[i];
        let lastTwoPair = [midNum, thirdNum];
        let firstTwoPair = [arr[i], midNum];
        
        if (pairDict.hasOwnProperty(lastTwoPair)) {
            output += pairDict[lastTwoPair];
        } 
        
        if (!pairDict.hasOwnProperty(firstTwoPair)) {
            pairDict[firstTwoPair] = 0;
        }
        
        pairDict[firstTwoPair] = pairDict[firstTwoPair] + (dict[midNum] || 0);
        
        dict[arr[i]] ? dict[arr[i]]++ : dict[arr[i]] = 1;
    }

    return output;
}

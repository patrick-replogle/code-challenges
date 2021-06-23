// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she 
// breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, 
// and she begins counting from there.

function breakingRecords(scores) {
    let maxCount = 0;
    let minCount = 0;
    let currMax = scores[0];
    let currMin = scores[0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > currMax) {
            maxCount++;
            currMax = scores[i];
        }

        if (scores[i] < currMin) {
            minCount++;
            currMin = scores[i];
        }
    }
    return [maxCount, minCount];
}

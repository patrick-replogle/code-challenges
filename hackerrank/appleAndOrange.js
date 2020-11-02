// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of 
// apples and oranges that land on Sam's house.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0

    for (let apple of apples) {
        let curr = a + apple;
        if (curr >= s && curr <= t) appleCount++;
    }
    
    for (let orange of oranges) {
        let curr = b + orange;
        if (curr >= s && curr <= t) orangeCount++;
    }
    console.log(appleCount);
    console.log(orangeCount);
}   

/*
HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly  people on social media.

On the first day, half of those  people (i.e., ) like the advertisement and each shares it with  of their friends. At the beginning of the second day,  
people receive the advertisement.

Each day,  of the recipients like the advertisement and will share it with  friends on the following day. Assuming nobody receives the advertisement twice, 
determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.
*/

// first pass solution
function viralAdvertising(n) {
    let output = 2;
    let people = 2;
    
    while (n > 1) {
        people *= 3;
        people = Math.floor(people / 2);
        output += people;
        n--;
    }
    return output;
}

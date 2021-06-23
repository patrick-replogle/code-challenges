/*
A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. The character 
must jump from cloud to cloud until it reaches the start again.

There is an array of clouds,  and an energy level . The character starts from  and uses  unit of energy to make a jump of size  to cloud . If it lands on 
a thundercloud, , its energy () decreases by  additional units. The game ends when the character lands back on cloud .

Given the values of , , and the configuration of the clouds as an array , determine the final value of  after the game ends.
*/

// first pass solution
function jumpingOnClouds(c, k) {
    let life = 100
    let idx = 0;
    
    while(true) {
        idx = (idx + k) % c.length;
        life--;
        if (c[idx] === 1) life -= 2;
        if (idx === 0) return life;
    }
}

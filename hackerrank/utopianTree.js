/*
The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.
A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after n growth cycles?
*/

// first pass solution
function utopianTree(n) {
    if (n === 0) return 1;
    
    let output = 1;
    let spring = true;
    
    while (n > 0) {
        if (spring) output *= 2;
        else output++;
        spring = !spring;
        n--;
    }
    return output;
}

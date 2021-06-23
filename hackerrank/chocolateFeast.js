/*
Little Bobby loves chocolate. He frequently goes to his favorite store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If 
Bobby saves enough wrappers, he can turn them in for a free chocolate.

Complete the chocolateFeast function in the editor below.

chocolateFeast has the following parameter(s):

int n: Bobby's initial amount of money
int c: the cost of a chocolate bar
int m: the number of wrappers he can turn in for a free bar
*/

// first pass solution
function chocolateFeast(n, c, m) {
    let chocolates = Math.floor(n / c);
    let wrappers = chocolates;

    while (wrappers >= m) {
        let next = Math.floor(wrappers / m);
        chocolates += next;
        wrappers -= (next * m);
        wrappers += next;
    }
    return chocolates;
}

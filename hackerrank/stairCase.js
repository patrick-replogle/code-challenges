// Staircase detail

// This is a staircase of size 4:

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

function staircase(n) {
    let spaces = n - 1;

    for (let i = 1; i < n + 1; i++) {
        console.log(" ".repeat(spaces) + "#".repeat(i));
        spaces--;
    }
}

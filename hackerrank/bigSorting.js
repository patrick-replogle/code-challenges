/*
Function Description

Complete the bigSorting function in the editor below.

bigSorting has the following parameter(s):

string unsorted[n]: an unsorted array of integers as strings
*/

// first pass solution
function bigSorting(unsorted) {
    return unsorted.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        }
        else if (a.length < b.length) {
            return - 1;
        }
        else {
            for (let i = 0; i < a.length && b.length; i++) {
                if (a[i] > b[i]) {
                    return 1;
                } else if (a[i] < b[i]) {
                    return -1;
                }
            }
            return 0;
        }
    })
}

/*
Function Description

Complete the gridSearch function in the editor below. It should return YES if the pattern exists in the grid, or NO otherwise.

gridSearch has the following parameter(s):

string G[R]: the grid to search
string P[r]: the pattern to search for
Input Format

The first line contains an integer , the number of test cases.

Each of the  test cases is represented as follows:
The first line contains two space-separated integers  and , the number of rows in the search grid  and the length of each row string.
This is followed by  lines, each with a string of  digits that represent the grid .
The following line contains two space-separated integers,  and , the number of rows in the pattern grid  and the length of each pattern row string.
This is followed by  lines, each with a string of  digits that represent the pattern grid .

Returns

string: either YES or NO
*/

// first pass solution
function gridSearch(G, P) {
    for (let i = 0; i < G.length; i++) {
        for (let j = 0; j < G[0].length; j++) {
            let str = G[i].slice(j, j + P[0].length);  
            if (str === P[0]) {
                let k = 0;
                let m = i;
                while (k < P.length && m < G.length) {
                    if (G[m].slice(j, j + P[0].length) === P[k]) {
                        k++
                        m++;
                        if (k === P.length) return 'YES';
                    } else break
                }
            }
        }
    }
    return 'NO';
}

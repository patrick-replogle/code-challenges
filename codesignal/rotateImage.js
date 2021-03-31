/*
Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
*/

// first pass solution without using built in reverse method
function rotateImage(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            [a[i][j], a[j][i]] = [a[j][i], a[i][j]];
        }
    }
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length / 2; j++) {
            [a[i][j], a[i][a[i].length - j - 1]] = [a[i][a[i].length - j - 1], a[i][j]]
        }
    }
    return a;
}

// second pass solution with reverse method
function rotateImage(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            [a[i][j], a[j][i]] = [a[j][i], a[i][j]];
        }
    }
    for (let row of a) {
        row.reverse();
    }
    return a;
}

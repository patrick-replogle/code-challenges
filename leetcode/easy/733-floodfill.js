// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, 
// "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the 
// same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), 
// and so on. Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.

// Example 1:
// Input: 
// image = [[1,1,1],[1,1,0],[1,0,1]]
// sr = 1, sc = 1, newColor = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: 
// From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
// by a path of the same color as the starting pixel are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected
// to the starting pixel.

// first pass iterative DFS solution
var floodFill = function(image, sr, sc, newColor) {
    let stack = [[sr, sc]];
    let oldColor = image[sr][sc];
    
    while (stack.length > 0) {
        let [row, col] = stack.pop();
        
        if (row < 0 || row > image.length - 1 || col < 0 || col > image[0].length - 1) continue;
        if (image[row][col] !== oldColor || image[row][col] === newColor) continue;
        
        image[row][col] = newColor;
        
        stack.push([row - 1, col]);
        stack.push([row + 1, col]);
        stack.push([row, col - 1]);
        stack.push([row, col + 1]);
    }
    return image;
};

// recursive DFS
var floodFill = function(image, sr, sc, newColor) {
    let oldColor = image[sr][sc];
    
    function DFS(row, col) {
        if (row < 0 || row > image.length - 1 || col < 0 || col > image[0].length - 1) return;
        if (image[row][col] !== oldColor || image[row][col] === newColor) return;

        image[row][col] = newColor;
        DFS(row - 1, col);
        DFS(row + 1, col);
        DFS(row, col - 1);
        DFS(row, col + 1);
    }
    
    DFS(sr, sc) 
    return image;
};

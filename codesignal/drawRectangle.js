// You are implementing a command-line version of the Paint app. Since the command line doesn't support colors, you are using different characters to 
// represent pixels. Your current goal is to support rectangle x1 y1 x2 y2 operation, which draws a rectangle that has an upper left corner at (x1, y1) 
// and a lower right corner at (x2, y2). Here the x-axis points from left to right, and the y-axis points from top to bottom.

// Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. 
// For the details about how rectangles are painted, see the example.

// Example

// canvas = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
//           ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
//           ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
//           ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
//           ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
// and rectangle = [1, 1, 4, 3], the output should be

// drawRectangle(canvas, rectangle) = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
//                  					         ['a', '*', '-', '-', '*', 'a', 'a', 'a'],
//                   					         ['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
//                   					         ['b', '*', '-', '-', '*', 'b', 'b', 'b'],
//                   					         ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
// Here is the rectangle, colored for illustration:

function drawRectangle(canvas, rectangle) {
    const [x1, y1, x2, y2] = rectangle;
    
    canvas[y1][x1] = "*";
    canvas[y1][x2] = "*";
    canvas[y2][x2] = "*";
    canvas[y2][x1] = "*";
    
    for (let i = x1 + 1; i < x2; i++) {
        canvas[y1][i] = "-";
        canvas[y2][i] = "-";
    }
    
    for (let i = y1 + 1; i < y2; i++) {
        canvas[i][x1] = "|";
        canvas[i][x2] = "|";
    }
    
    return canvas;
}

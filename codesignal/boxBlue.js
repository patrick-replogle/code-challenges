// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, 
// so you want to apply the box blur algorithm to the photo to hide its content.

// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output 
// image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels 
// on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

// Example

// For

// image = [[1, 1, 1], 
//          [1, 7, 1], 
//          [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].

// To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are 
// cropped from the final result.

// first pass solution
function boxBlur(image) {
    let result = [];
    
    for (let i = 1; i < image.length - 1; i++) {
        let temp = [];
        
        for (let j = 1; j < image[0].length - 1; j++) {
            temp.push(calculateBlur(image, i, j));
        }
        result.push(temp);
    }
    return result;
}

function calculateBlur(image, i, j) {
    let total = image[i-1][j-1] + image[i-1][j] + image[i-1][j+1] +
                image[i][j-1] + image[i][j] + image[i][j+1] +
                image[i+1][j-1] + image[i+1][j] + image[i+1][j+1];
                
    return Math.floor(total / 9);
}

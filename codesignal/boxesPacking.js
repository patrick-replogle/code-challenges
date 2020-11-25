// You are given n rectangular boxes, the ith box has the length lengthi, the width widthi and the height heighti. Your task is to 
// check if it is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, 
// can contain at most one another box, and so on). More formally, your task is to check whether there is such sequence of n different 
// numbers pi (1 ≤ pi ≤ n) that for each 1 ≤ i < n the box number pi can be put into the box number pi+1.
// A box can be put into another box if all sides of the first one are less than the respective ones of the second one. You can rotate 
// each box as you wish, i.e. you can swap its length, width and height if necessary.

// Example

// For length = [1, 3, 2], width = [1, 3, 2], and height = [1, 3, 2], the output should be
// boxesPacking(length, width, height) = true;
// For length = [1, 1], width = [1, 1], and height = [1, 1], the output should be
// boxesPacking(length, width, height) = false;
// For length = [3, 1, 2], width = [3, 1, 2], and height = [3, 2, 1], the output should be
// boxesPacking(length, width, height) = false.

function boxesPacking(length, width, height) {  
    let boxes = [];
    
    for (let i = 0; i < length.length; i++) {
        boxes.push({
            volume: length[i] + width[i] + height[i],
            dimensions: [length[i], width[i], height[i]].sort((a, b) => a - b)
        });
    }
    
    boxes.sort((a, b) => a.volume - b.volume);
    
    for (let i = 0; i < boxes.length - 1; i++) {
        if (!compareBoxes(boxes[i].dimensions, boxes[i + 1].dimensions)) {
            return false;
        }
    }
    return true;
}

function compareBoxes(smaller, larger) {
    for (let i = 0; i < smaller.length; i++) {
        if (smaller[i] >= larger[i]) {
            return false;
        }
    }
    return true;
}

// similar solution not using objects to sort by volume and dimensions
function boxesPacking(length, width, height) {  
    let dimensions = [];
    
    for (let i = 0; i < length.length; i++) {
        dimensions.push(
            [length[i], width[i], height[i]].sort((a, b) => a - b)
        )
    }
    
    dimensions.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
    
    for (let i = 0; i < dimensions.length - 1; i++) {
        if (!compareBoxes(dimensions[i], dimensions[i+1])) {
            return false;
        }
    }
    return true;
}

function compareBoxes(smaller, larger) {
    if (smaller[0] >= larger[0] ||
        smaller[1] >= larger[1] ||
        smaller[2] >= larger[2]
    ) {
        return false;
    }
    return true;
}

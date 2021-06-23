/*
When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is 
highlighted independently.
*/

// first pass solution
function designerPdfViewer(h, word) {
    let max = -Infinity;
    
    for (let char of word) {
        max = Math.max(max, h[char.charCodeAt(0) - 97]);
    }
    return max * word.length;
}

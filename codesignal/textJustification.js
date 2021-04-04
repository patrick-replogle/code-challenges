/*
Given an array of words and a length l, format the text such that each line has exactly l characters and is fully justified on both the left and the 
right. Words should be packed in a greedy approach; that is, pack as many words as possible in each line. Add extra spaces when necessary so that each 
line has exactly l characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty 
slots on the left will be assigned more spaces than the slots on the right. For the last line of text and lines with one word only, the words should be 
left justified with no extra space inserted between them.

Example

For
words = ["This", "is", "an", "example", "of", "text", "justification."]
and l = 16, the output should be

textJustification(words, l) = ["This    is    an",
                               "example  of text",
                               "justification.  "]
*/

// first pass solution
function textJustification(words, l) {
    let output = [];
    let curr = [];
    let currLen = 0;
    
    words.forEach((word, i) => {
        if (currLen + word.length <= l) {
            curr.push(word);
            currLen = i < words.length - 1 ? 
                currLen + word.length + 1 : currLen + word.length
        } else {
            output.push(curr)
            curr = []
            curr.push(word)
            currLen = word.length + 1;
        }
    })
    
    output.push(curr);
    
    for (let i = 0; i < output.length; i++) {
        let arr = output[i]
        let gaps = arr.length - 1;
        let charLen = arr.join('').length;
        
        if (i < output.length - 1) {
            if (gaps > 0) {
                let leftover = l - arr.join('').length;
                let isEven = leftover % gaps === 0;
                if (isEven) {
                    output[i] = output[i].join(' '.repeat(leftover / gaps))
                } else {
                    let j = 0;
                    let spaces = l - charLen;
                    while (spaces > 0) {
                        arr[j] = arr[j] + ' '
                        spaces--;
                        j++;
                        if (j === arr.length - 1) j = 0;
                    }
                    output[i] = output[i].join('')
                }     
            } else {
                output[i] = arr.join('') + ' '.repeat(l - charLen) 
            }  
       } else {
            if (output[i].length > 1) output[i] = output[i].join(' ');
            else output[i] = output[i].join('');
            output[i] += ' '.repeat(l - output[i].length)
        }
    }
    return output;
}

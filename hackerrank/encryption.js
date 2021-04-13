/*
An English text needs to be encrypted using the following encryption scheme.
First, the spaces are removed from the text. Let l be the length of this text.

ifmanwas  
meanttos          
tayonthe  
groundgo  
dwouldha  
vegivenu  
sroots

The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
Create a function to encode a message.
*/

// first pass solution
function encryption(s) {
    let rows = Math.floor(Math.sqrt(s.length));
    let cols = Math.ceil(Math.sqrt(s.length));
    let arr = [];
    let currRow = '';
    let encodedMsg = new Array(cols).fill('');
    
    for (let char of s) {
        currRow += char;
        if (currRow.length === cols) {
            arr.push(currRow);
            currRow = '';
        }
    }
    if (currRow.length) arr.push(currRow);
    
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            encodedMsg[j] += arr[i][j];
        }
    }
    return encodedMsg.join(' ');
}

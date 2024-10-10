var kthCharacter = function(k) {
    let word = 'a';
    let wordLen = 1;

    while (wordLen < k) {

        for (let i = 0; i < wordLen; i++) {
            word += String.fromCharCode(word.charCodeAt(i) + 1);
        }

        wordLen = word.length;
    }

    return word[k - 1];
};

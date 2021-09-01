// first pass solution -> times out for last three hidden tests
function findSubstrings(words, parts) {
    let output = [];
    parts.sort((a, b) => b.length - a.length);
    
    for (let word of words) {
        let j = -1;
        let p = ""
        for (let part of parts) {
            if (part.length < p.length) break;
            let i = word.indexOf(part);
            if (i > -1) {
                if (part.length > p.length) {
                    p = part;
                    j = i;
                } else if (part.length === p.length && i < j) {
                    p = part;
                    j = i;
                }
            }
        }
        
        if (j > -1) {
            word = word.slice(0, j) + "[" + p + "]" + word.slice(j + p.length);
        } 
        output.push(word);
    }
    return output;
}

// second pass solution using a trie -> passes all test cases
function findSubstrings(words, parts) {
    let output = [];
    let trie = buildTrie(parts);
    let map = {};
    
    
    for (let word of words) {
        map[word] = [];
        for (let j = 0; j < word.length; j++) {
            if (word[j] in trie) {
                checkWord(word, trie, j, map);
            }
        }
        if (!map[word].length) {
            output.push(word);
        } else {
            let part = map[word][0];
            let startIdx = map[word][1];
            output.push(word.slice(0, startIdx) + "[" + part + "]" + word.slice(startIdx + part.length));
        }
    }
    
    return output;
}

function buildTrie(parts) {
    let trie = {};
    
    for (let part of parts) {
        let curr = trie;
        for (let char of part) {
            if (!curr.hasOwnProperty(char)) {
                curr[char] = {};
            }
            curr = curr[char];
        }
        curr.part = part;
    }
    
    return trie;
}

function checkWord(word, trie, j, map) {
    let i = j;
    let curr = trie[word[i]];
  
    while (curr && i < word.length) {
        if (curr && curr.part) {
            if (map[word].length === 0 || curr.part.length > map[word][0].length) {
               map[word] = [curr.part, j]; 
            } else if (curr.part.length === map[word][0].length && i < map[word][1]) {
                map[word] = [curr.part, j]; 
            }
        }
        i++;
        curr = curr[word[i]];
    }
}

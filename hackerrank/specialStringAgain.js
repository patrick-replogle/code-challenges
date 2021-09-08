// first pass solution
function substrCount(n, s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        let char = s[left];
        
        // odd special substrings
        while (left >= 0 && right < s.length && s[left] === char && s[right] === char) {
            count++;
            left--;
            right++;

        }
        
        left = i;
        right = i+1;
        char = s[left];
        
        // even special substrings
        while (left >= 0 && right < s.length && s[left] === char &&  s[right] === char) {
            count++;
            left--;
            right++;
        }
        
        // odd special substrings where middle char is different from the rest
        if (i + 1 < s.length && s[i-1] === s[i+1] && s[i] !== s[i-1]) {
            left = i - 1;
            right = i+1;
            char = s[left];
            
            while (left >= 0 && right < s.length && s[left] === char &&  s[right] === char) {
                count++;
                left--;
                right++;
            }
        }
    }
    
    return count;
}

function longestCommonSubstring(s, t) {
    const map = {};
    let maxLen = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in map)) map[s[i]] = new Set();
        map[s[i]].add(i);
    }
    
    for (let i = 0; i < t.length; i++) {
        if (t[i] in map) {  
            for (let index of map[t[i]]) {
                let k = index;
                let j = i;
                let curr = 0;
                while (j < t.length && k < s.length && s[k] === t[j]) {
                    curr++, j++, k++;
                    maxLen = Math.max(maxLen, curr);
                }
            }
        }
    }
    return maxLen;
}

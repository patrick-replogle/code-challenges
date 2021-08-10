var makeFancyString = function(s) {
    if (s.length < 3) return s;
    
    let arr = [];
    arr.push(s.substring(0, 2));
    
    for (let i = 2; i < s.length; i++) {
        let currChar = s.charAt(i);
        
        if (currChar === s.charAt(i - 1) && currChar === s.charAt(i-2)) continue;
        arr.push(currChar);
    }
    
    return arr.join("");
};

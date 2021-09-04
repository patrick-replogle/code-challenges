// first pass solution
function funnyString(s) {
    let reversed = s.split('').reverse().join('');
    
    for (let i = 1; i < s.length; i++) {
        let diff1 = Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1));
        let diff2 = Math.abs(reversed.charCodeAt(i) - reversed.charCodeAt(i-1));
        if (diff1 !== diff2) return 'Not Funny';
    }
    return 'Funny';
}

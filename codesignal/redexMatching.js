// first pass solution
function regexMatching(pattern, test) {
    if (pattern[0] === '^') {
        return test.startsWith(pattern.slice(1));
    }
    else if (pattern[pattern.length -1] === '$') {
        return test.endsWith(pattern.slice(0, pattern.length - 1));
    }
    else {
        return test.indexOf(pattern) > -1;
    }
}

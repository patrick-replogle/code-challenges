boolean regexMatching(String pattern, String test) {
    if (pattern.charAt(0) == '^') {
        return test.startsWith(pattern.substring(1));
    }
    else if (pattern.charAt(pattern.length() - 1) == '$') {
        return test.endsWith(pattern.substring(0, pattern.length() - 1));
    }
    else {
        return test.indexOf(pattern) > -1;
    }
}

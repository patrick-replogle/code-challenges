bool isMatch(char currChar, char prevChar) {
    if (prevChar == '(' && currChar == ')') {
        return true;
    } else if (prevChar == '[' && currChar == ']') {
        return true;
    } else if (prevChar == '{' && currChar == '}') {
        return true;
    }
    return false;
}

bool isValid(char * s){
    int sLen = strlen(s);
    char *stack = malloc(sLen * sizeof(char));
    int stackPtr = -1;
    
    for (int i = 0; i < sLen; i++) {
        char curr = s[i];
        
        if (curr == '(' || curr == '[' || curr == '{') {
            stackPtr++;
            stack[stackPtr] = curr;
        } else {
            if (stackPtr == -1 || !isMatch(curr, stack[stackPtr])) {
                return false;
            } 
            stackPtr--;
        }
    }
    
    free(stack);
    
    return stackPtr == -1;
}

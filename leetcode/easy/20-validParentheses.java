// first pass solution

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        
        for (int i = 0; i < s.length(); i++) {
            char currChar = s.charAt(i);
            if (currChar == '(' || currChar == '[' || currChar == '{') {
                stack.push(currChar);
            } else {
                if (stack.isEmpty()) {
                    return false;
                }
                char topOfStack = stack.pop();
                if (!validate(topOfStack, currChar)) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
    public boolean validate(char char1, char char2) {
        if (char1 == '(' && char2 != ')') {
            return false;
        }
        else if (char1 == '[' && char2 != ']') {
            return false;
        }
        else if (char1 == '{' && char2 != '}') {
            return false;
        }
        return true;
    }
}

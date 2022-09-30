class Solution {
    public String removeStars(String s) {
        Stack<Character> stack = new Stack();
        StringBuilder sb = new StringBuilder();
        
        for (char c: s.toCharArray()) {
            if (c == '*') {
                while (!stack.isEmpty()) {
                    char topOfStack = stack.pop();
                    if (Character.isLetter(topOfStack)) {
                        break;
                    } 
                }
            } else {
                stack.push(c);
            }
        }
        
        for (char c : stack) {
            sb.append(c);
        }
        
        return sb.toString();
    }
}

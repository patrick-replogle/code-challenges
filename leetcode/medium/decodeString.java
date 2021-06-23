class Solution {
    public String decodeString(String s) {
        Stack<String> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
          
            if (ch != ']') {
                stack.push(String.valueOf(ch));
            } else {
                String chars = "";
                String nums = "";

                while (stack.size() > 0 && Character.isLetter(stack.peek().charAt(0))) {
                    chars = stack.pop() + chars;
                }

                if (stack.size() > 0 && stack.peek().charAt(0) == '[') {
                    stack.pop();
                }
              
                while (stack.size() > 0 && Character.isDigit(stack.peek().charAt(0))) {
                    nums = stack.pop() + nums;
                }
              
                if (nums.length() > 0) {
                    stack.push(chars.repeat(Integer.parseInt(nums)));
                } else {
                    stack.push(chars);
                }
            }
        }
        return String.join("", stack);
    }
}

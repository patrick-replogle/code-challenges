class Solution {
    public String removeDuplicates(String s) {
        Stack<String> stack = new Stack<>();
        String[] arr = s.split("");
        
        for (String c : arr) {
            stack.push(c);
            
            while (stack.size() > 1 && stack.get(stack.size() - 1).equals(stack.get(stack.size() - 2))) {
                stack.pop();
                stack.pop();
            }
        }
        return String.join("", stack);
    }
}

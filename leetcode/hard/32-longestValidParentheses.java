// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
  
// Example 2:
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
  
// Example 3:
// Input: s = ""
// Output: 0

// brute force solution
class Solution {
    public int longestValidParentheses(String s) {
        int longest = 0;
        
        for (int i = 0; i < s.length(); i++) {
            for (int j = i; j < s.length(); j++) {
                if (isValid(s.substring(i, j + 1))) {
                    longest = Math.max(longest, j - i + 1);
                }
            }
        }
        return longest;
    }
    
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        
        for (int i = 0; i < s.length(); i++) {
            char currChar = s.charAt(i);
            
            if (currChar == '(') {
                stack.push(currChar);
            } else {
                if (stack.empty()) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.empty();
    }
}

// optimized solution
class Solution {
    public int longestValidParentheses(String s) {
        Stack<Integer> stack = new Stack<>();
        stack.push(0);
        int longest = 0;
        
        for (int i = 0; i < s.length(); i++) {
            char currChar = s.charAt(i);
            
            if (currChar == '(') {
                stack.push(i);
            } else {
                if (i == 0) continue;
                
                stack.pop();
                if (stack.empty()) {
                    stack.push(i);
                } else {
                    longest = Math.max(longest, i - stack.peek());
                }
            }
        } 
        return longest;
    }
}

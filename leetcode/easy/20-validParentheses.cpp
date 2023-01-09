class Solution {
public:
    bool isValid(string s) {
        stack<char> stack;

        for (int i = 0; i < s.length(); i++) {
            char c = s[i];
          
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else {
                if (stack.empty()) return false;
                if (c == ')' && stack.top() != '(') return false;
                if (c == ']' && stack.top() != '[') return false;
                if (c == '}' && stack.top() != '{') return false;
                stack.pop();
            }
        }

        return stack.empty();
    }
};

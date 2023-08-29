class Solution {
public:
    int minLength(string s) {
        stack<char> stack;

        for (const auto c: s) {
            if (!stack.empty()) {
                char top = stack.top();

                if (top == 'A' && c == 'B') {
                    stack.pop();
                } else if (top == 'C' &&  c == 'D') {
                    stack.pop();
                } else {
                    stack.push(c);
                }
            } else {
                stack.push(c);
            }

        }
        return stack.size();
    }   
};

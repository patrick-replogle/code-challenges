class Solution {
public:
    string reverseWords(string s) {
        string output = "";
        int left = 0;
        int right = 0;

        while (right < s.length()) {
            if (s[right] != ' ') {
                while (right < s.length() && s[right] != ' ') {
                    right++;
                }
                string curr = "";

                for (int i = right - 1; i >= left; i--) {
                    curr += s[i];
                }
                output += curr;
                if (right < s.length()) output += ' ';
                left = right + 1;
            }
            right++;
        }
        return output;
    }
};

class Solution {
public:
    string makeSmallestPalindrome(string s) {
        int j = s.length() - 1;

        for (int i = 0; i < s.length() / 2; i++) {
            if (s[i] != s[j]) {
                if (s[i] < s[j]) s[j] = s[i];
                else s[i] = s[j];
            }
            j--;
        }

        return s;
    }
};

class Solution {
public:
    bool isPalindrome(string s) {
        int i = 0;
        int j = s.length() - 1;

        while (i <= j) {
            while (i < s.length() && i <= j && !iswalnum(s[i])) i++;
            while (j >= 0 && j >= i && !iswalnum(s[j])) j--;
            if (i > j) return true;
            if (tolower(s[i]) != tolower(s[j])) return false;
            i++;
            j--;
        }

        return true;
    }
};

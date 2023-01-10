class Solution {
public:
    int lengthOfLastWord(string s) {
        int left, right = s.length() - 1;


        while (right >= 0) {
            if (isalpha(s[right])) break;
            right--;
        }

        left = right - 1;

        while (left >= 0) {
            if (s[left] == ' ') break;
            left--;
        }

        return right - left;
    }
};

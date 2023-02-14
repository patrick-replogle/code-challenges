class Solution {
public:
    int countSegments(string s) {
        if (s.length() < 1) return 0;

        int output = s[0] != ' ' ? 1 : 0;

        for (int i = 1; i < s.length(); i++) {
            if (s[i] != ' ' && s[i-1] == ' ') output++;
        }
        return output;
    }
};

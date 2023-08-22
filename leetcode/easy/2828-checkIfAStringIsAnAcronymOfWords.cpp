class Solution {
public:
    bool isAcronym(vector<string>& words, string s) {
        int i = 0;

        for (const auto &word: words) {
            if (word[0] != s[i]) return false;
            i++;
        }

        return i == s.length();
    }
};

class Solution {
public:
    int firstUniqChar(string s) {
        map<int, int> charCount;

        for (const auto c: s) {
            charCount[c]++;
        }

        for (int i = 0; i < s.length(); i++) {
            char c = s[i];
            auto it = charCount.find(c);
            if (it->second == 1) return i;
        }
        return -1;
    }
};

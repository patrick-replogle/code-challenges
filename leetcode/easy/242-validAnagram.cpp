class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) return false;

        int count[26] {0};

        for (int i = 0; i < s.length(); i++) {
            int index1 = (int) s[i] - 97;
            int index2 = (int) t[i] - 97;

            count[index1]++;
            count[index2]--;
        }

        for (const auto num: count) {
            if (num != 0) return false;
        }

        return true;
    }
};

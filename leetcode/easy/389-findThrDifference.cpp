class Solution {
public:
    char findTheDifference(string s, string t) {
        int count[26] {0};

        for (const auto c: s) {
            int i = (int) c - 97;
            count[i]++;
        }

        for (const auto c: t) {
            int i = (int) c - 97;
            count[i]--;

            if (count[i] < 0) return c;
        }

        return '1';
    }
};

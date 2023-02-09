class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        int magCharCount[26] {0};

        for (const auto c: magazine) {
            int i = (int) c - 97;
            magCharCount[i]++;
        }

        for (const auto c: ransomNote) {
            int i = (int) c - 97;
            magCharCount[i]--;
            if (magCharCount[i] < 0) return false;
        }

        return true;
    }
};

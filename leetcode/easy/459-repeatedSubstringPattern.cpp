class Solution {
public:
    bool repeatedSubstringPattern(string s) {
      
        for (int i = 0; i < s.length() / 2; i++) {
            string curr = s.substr(0, i + 1);

            if (s.length() % curr.length() != 0) continue;

            int multBy = (s.length() / curr.length()) - 1;
            string pattern = curr;

            while (multBy > 0) {
                pattern += curr;
                multBy--;
            }
            if (pattern == s) return true;
        }
        return false;
    }
};

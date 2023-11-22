class Solution {
public:
    int findMinimumOperations(string s1, string s2, string s3) {
        if (s1.compare(s2) == 0 && s2.compare(s3) == 0) return 0;

        int len1 = s1.length();
        int len2 = s2.length();
        int len3 = s3.length();
        int minLen = min(len1, min(len2, len3));
        int i = 0;

        while (i < minLen && s1[i] == s2[i] && s2[i] == s3[i]) {
            i++;
        }

        if (i == 0) {
            return -1;
        }

        return (len1 - i) + (len2 - i) + (len3 - i);
    }
};

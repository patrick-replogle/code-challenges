class Solution {
public:
    int findTheLongestBalancedSubstring(string s) {
        int output = 0;

        for (int i = 0; i < s.length() - 1; i++) {
            if (s[i] == '0' && s[i+1] == '1') {
                int j = i;
                int k = i + 1;
                int len = 2;

                while (j-1 >= 0 && s[j-1] == '0' && k+1 < s.length() && s[k+1] == '1') {
                    j--;
                    k++;
                    len += 2;
                }
                output = max(output, len);
            }
        } 

        return output;
    }
};

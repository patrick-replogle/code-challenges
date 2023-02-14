class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        if (s.size() == 0) return 0;

        int output = 0;
        int i = 0;
        int j = 0;

        sort(g.begin(), g.end());
        sort(s.begin(), s.end());

        while (i < g.size() && j < s.size()) {
            if (g[i] <= s[j]) {
                j++;
                i++;
                output++;
            } else {
                j++;
            }
        }
        return output;
    }
};

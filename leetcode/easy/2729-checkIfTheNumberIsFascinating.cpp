class Solution {
public:
    bool isFascinating(int n) {
        int twoN = 2 * n;
        int threeN = 3 * n;
        map<char, int> map;
        string s = to_string(n) + to_string(twoN) + to_string(threeN);
        
        for (char c : s) {
            if (map.find(c) != map.end()) {
                map[c]++;
               
            } else {
                map[c] = 1;
            }

             if (map[c] > 1) return false;
             if (!isdigit(c) || c == '0') return false;
        }

        return true;
    }
};

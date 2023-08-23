class Solution {
public:
    string removeTrailingZeros(string num) {
        int count = 0;

        for (int i = num.length() - 1; i >= 0; i--) {
            if (num[i] == '0') count++;
            else break;
        }

        return num.substr(0, num.length() - count);
    }
};

class Solution {
public:
    string maximumOddBinaryNumber(string s) {
        int ones = 0;
        string output = "";

        for (const auto& c: s) {
            if (c == '1') ones++;
        }

        for (int i = 0; i < s.length(); i++) {
            if (i == s.length() - 1) {
                output += '1';
            } else if (ones > 1) {
                output += '1';
                ones--;
            } else {
                output += '0';
            }
        }

        return output;
    }
};

class Solution {
public:
    vector<int> evenOddBit(int n) {
        vector<int> output {0, 0};
        string binary_str = "";

        while (n > 0) {
            int bit = n & 1;
            binary_str += to_string(bit);
            n >>= 1;
        }

        for (int i = 0; i < binary_str.length(); i++) {
            if (i % 2 == 0) {
                output[0] += binary_str.at(i) - '0';
            } else {
                output[1] += binary_str.at(i) - '0';
            }
        }

        return output;
    }
};

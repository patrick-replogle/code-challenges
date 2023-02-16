class Solution {
public:
    int findComplement(int num) {
        string output = "";

        while(num) {
            int bit = (num & 1) ^ 1;
            output = to_string(bit) + output;
            num >>= 1;
        }

        return stoi(output, 0, 2);
    }
};

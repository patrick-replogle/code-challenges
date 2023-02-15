class Solution {
public:
    int hammingDistance(int x, int y) {
        int output = 0;
        int n = x ^ y;

        while (n) {
            output += n & 1;
            n >>= 1;
        }

        return output;
    }
};

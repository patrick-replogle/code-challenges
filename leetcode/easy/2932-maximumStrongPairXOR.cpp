class Solution {
public:
    int maximumStrongPairXor(vector<int>& nums) {
        int output = INT_MIN;

        for (const auto& num1: nums) {
            for (const auto& num2: nums) {
                if (abs(num1 - num2) <= min(num1, num2)) {
                    output = max(output, num1 ^ num2);
                }
            }
        }

        return output;
    }
};

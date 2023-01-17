class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int output = 0;
        for (const auto& num : nums) {
            output ^= num;
        }

        return output;
    }
};

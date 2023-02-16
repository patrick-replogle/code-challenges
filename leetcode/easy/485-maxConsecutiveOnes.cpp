class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int output = 0;
        int curr = 0;

        for (const auto num: nums) {
            if (num == 1) {
                curr++;
                output = max(curr, output);
            } else {
                curr = 0;
            }
        }
        return output;
    }
};

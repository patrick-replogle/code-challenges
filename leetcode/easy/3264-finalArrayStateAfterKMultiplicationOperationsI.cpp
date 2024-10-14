class Solution {
public:
    vector<int> getFinalState(vector<int>& nums, int k, int multiplier) {
        while (k > 0) {
            int minVal  = INT_MAX;
            int index = 0;

            for (int i = 0; i< nums.size(); i++) {
                if (nums[i] < minVal) {
                    minVal = nums[i];
                    index = i;
                }
            }

            nums[index] *= multiplier;
            k--;
        }

        return nums;
    }
};

class Solution {
public:
    int minimumSum(vector<int>& nums) {
        int output = INT_MAX;

        for (int i = 0; i < nums.size() - 2; i++) {
            for (int j = i + 1; j < nums.size() - 1; j++) {
                for (int k = j + 1; k < nums.size(); k++) {
                    if (nums[i] < nums[j] && nums[k] < nums[j]) {
                        output = min(output, nums[i] + nums[j] + nums[k]);
                    }
                }
            }
        }

        return output == INT_MAX ? -1 : output;
    }
};

class Solution {
public:
    vector<int> leftRightDifference(vector<int>& nums) {
        vector<int> output = {0};
        int currSum = 0;

        for (int i = 1; i < nums.size(); i++) {
            currSum += nums[i-1];
            output.push_back(currSum);
        }

        currSum = 0;

        for (int i = nums.size() - 2; i >= 0; i--) {
            currSum += nums[i+1];
            output[i] = abs(output[i] - currSum);
        }

        return output;
    }
};

class Solution {
public:
    vector<int> findIndices(vector<int>& nums, int indexDifference, int valueDifference) {
        vector<int> output = {-1, -1};

        for (int i = 0; i < nums.size(); i++) {
            for (int j = i + indexDifference; j < nums.size(); j++) {
                if (abs(nums[i] - nums[j]) >= valueDifference) {
                    output[0] = i;
                    output[1] = j;
                    break;
                }
            }
        }

        return output;
    }
};

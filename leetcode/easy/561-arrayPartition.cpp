class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        int output = 0;

        sort(nums.begin(), nums.end());

        for (int i = 1; i < nums.size(); i += 2) {
            output += min(nums[i-1], nums[i]);
        }
        return output;
    }
};

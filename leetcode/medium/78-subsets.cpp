class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> output;
        vector<int> subset;
      
        findSubsets(subset, output, nums, 0);

        return output;
    }

    void findSubsets(vector<int>& subset, vector<vector<int>>& output, vector<int>& nums, int i) {
        output.push_back(subset);

        for (int j = i; j < nums.size(); j++) {
            subset.push_back(nums[j]);
            findSubsets(subset, output, nums, j + 1);
            subset.pop_back();
        }
    }
};

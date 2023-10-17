class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> output;
        vector<int> currPermutation;
        set<int> seen;

        findPermutations(output, currPermutation, nums, seen);

        return output;
    }

    void findPermutations(
        vector<vector<int>>& output, 
        vector<int>& currPermutation, 
        vector<int>& nums, 
        set<int>& seen) {
        if (currPermutation.size() == nums.size()) {
            output.push_back(currPermutation);
            return;
        }

        for (int i = 0; i < nums.size(); i++) {
            if (seen.find(i) == seen.end()) {
                seen.insert(i);
                currPermutation.push_back(nums[i]);
                findPermutations(output, currPermutation, nums, seen);
                seen.erase(i);
                currPermutation.pop_back();
            }
        }
    }
};

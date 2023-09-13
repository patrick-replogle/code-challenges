class Solution {
public:
    vector<int> distinctDifferenceArray(vector<int>& nums) {
        vector<int> output;
        map<int, int> prefix;
        map<int, int> suffix;
        set<int> set;

        for(int i = 0; i < nums.size(); i++) {
            set.insert(nums[i]);
            prefix[i] = set.size();
        }

        set.clear();

        for (int i = nums.size() - 1; i >= 0; i--) {
            set.insert(nums[i]);
            suffix[i] = set.size();
        }

        for (int i = 0; i < nums.size(); i++) {
            output.push_back(prefix[i] - suffix[i+1]);
        }

        return output;
    }
};

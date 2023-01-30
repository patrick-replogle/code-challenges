class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        set<int> set;
        int i = 0;
        bool flag = false;

        while (i < nums.size() && !flag) {
            if (set.find(nums[i]) != set.end()) {
                flag = true;
            }
            set.insert(nums[i]);
            i++;
        }

        return flag;
    }
};

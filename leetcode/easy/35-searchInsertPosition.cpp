class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        if (nums.size() > 0 && nums[0] > target) return 0;
        
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == target || nums[i] > target) return i;
        }

        return nums.size();
    }
};

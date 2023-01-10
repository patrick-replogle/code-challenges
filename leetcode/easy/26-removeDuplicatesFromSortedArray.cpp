class Solution {
public:
    int removeDuplicates(vector<int> &nums) {
        if (nums.size() <= 1) return nums.size();
        
        int i = 1;

        for (; i < nums.size(); i++) {
            if (nums[i] <= nums[i-1]) {
                int j = i + 1;

                while (j < nums.size() && nums[j] <= nums[i-1]) j++;
              
                if (j >= nums.size() || nums[j] < nums[i]) break;
              
                swap(nums[i], nums[j]);
            }
        }

        return i;
    }
};

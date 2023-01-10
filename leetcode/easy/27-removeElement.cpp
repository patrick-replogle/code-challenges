class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int i = 0;

        for (; i < nums.size(); i++) {
            if (nums[i] == val) {
                int j = i + 1;
                while (j < nums.size() && nums[j] == val) { j++; }
                if (j >= nums.size() || nums[j] == val) break;
                swap(nums[i], nums[j]);
            }
        }
        return i;
    }
};

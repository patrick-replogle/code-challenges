class Solution {
public:
    int incremovableSubarrayCount(vector<int>& nums) {
        int output = 0;

        for (int i = 0; i < nums.size(); i++) {
            for (int j = i; j < nums.size(); j++) {
                if (isAscending(nums, i, j)) {
                    output++;
                }
            }
        }

        return output;
    }

    bool isAscending(vector<int>& nums, int left, int right) {
        int prev = -1;

        for (int i = 0; i < nums.size(); i++) {
            if (i >= left && i <= right) continue;
            if (nums[i] <= prev) return false;
            prev = nums[i];
        }

        return true;
    }
};

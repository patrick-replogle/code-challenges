class Solution {
public:
    int semiOrderedPermutation(vector<int>& nums) {
        int steps = 0;

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == 1) {
                while (i > 0) {
                    swap(nums[i], nums[i-1]);
                    steps++;
                    i--;
                }
                break;
            }
        }

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == nums.size()) {
                steps += nums.size() - i - 1;
                break;
            }
        }

        return steps;
    }
};

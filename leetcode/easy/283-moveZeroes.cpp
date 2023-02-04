// first pass 
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int left = 0;
        int right = 0;

        while (right < nums.size()) {
            if (nums[right] == 0) {
                while (right < nums.size() && nums[right] == 0) right++;
            }
            if (right < nums.size() && nums[right] != 0) swap(nums[left], nums[right]);
            right++;
            left++;
        }
    }
};

// second pass
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int left = 0;
        int right = 0;

        while (right < nums.size()) {
            if (nums[left] == 0) swap(nums[right], nums[left]);
            if (nums[left] != 0) left++;
            right++;
        }
    }
};

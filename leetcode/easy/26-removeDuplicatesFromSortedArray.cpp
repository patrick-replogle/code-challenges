class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
      int left = 1;

      for (int i = 1; i < nums.size(); i++) {
        if (nums[i] > nums[left - 1]) {
          nums[left] = nums[i];
          left++;
        } 
      }

      return left;
    }
};

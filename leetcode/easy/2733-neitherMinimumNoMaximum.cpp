// solution 1
class Solution {
public:
    int findNonMinOrMax(vector<int>& nums) {
        if (nums.size() < 2) return -1;

        sort(nums.begin(), nums.end());
        int min = nums[0];
        int max = nums[nums.size() - 1]; 


        for (int i = 1; i < nums.size() -1; i++) {
            if (nums[i] != min && nums[i] != max) {
                return nums[i];
            }
        }

        return -1;
    }
};

// solution 2
class Solution {
public:
    int findNonMinOrMax(vector<int>& nums) {
        if (nums.size() < 2) return -1;

        int minNum = INT_MAX;
        int maxNum = INT_MIN; 


        for (const auto num: nums) {
            minNum = min(minNum, num);
            maxNum = max(maxNum, num);
        }

        for (const auto num: nums) {
            if (num != minNum && num != maxNum) {
                return num;
            }
        }

        return -1;
    }
};

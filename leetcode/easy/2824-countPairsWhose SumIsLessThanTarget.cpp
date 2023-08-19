// solution #1
class Solution {
public:
    int countPairs(vector<int>& nums, int target) {
        int pairs = 0;
        sort(nums.begin(), nums.end());

        for (int i = 0; i < nums.size() - 1; i++) {
            for (int j = i + 1; j < nums.size(); j++) {
                if (nums[j] + nums[i] < target) pairs++;
                else break;
            }
        }

        return pairs;
    }
};

// solution #2
class Solution {
public:
    int countPairs(vector<int>& nums, int target) {
        int pairs = 0;
        int left = 0;
        int right = nums.size() -1;

        sort(nums.begin(), nums.end());

        while (left < right) {
            if (nums[left] + nums[right] < target) {
                pairs += right - left;
                left++;
            } else {
                right--;
            }
        }
    

        return pairs;
    }
};

// solution 1
class Solution {
public:
    int missingInteger(vector<int>& nums) {
        int sequentialPrefixSum = nums[0];
        int i = 1;
        set<int> seen;

        while (i < nums.size() && nums[i] == nums[i-1] + 1) {
            sequentialPrefixSum += nums[i];
            i++;
        }

        for (const auto& num: nums) {
            seen.insert(num);
        }

        while (true) {
            if (seen.find(sequentialPrefixSum) == seen.end()) {
                break;
            }
            sequentialPrefixSum++;
        }
      
        return sequentialPrefixSum;
    }
};

// solution 2
class Solution {
public:
    int missingInteger(vector<int>& nums) {
        int sequentialPrefixSum = nums[0];
        int i = 1;

        while (i < nums.size() && nums[i] == nums[i-1] + 1) {
            sequentialPrefixSum += nums[i];
            i++;
        }

        sort(nums.begin(), nums.end());

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == sequentialPrefixSum) {
                sequentialPrefixSum++;
            }
        }
        
        return sequentialPrefixSum;
    }
};

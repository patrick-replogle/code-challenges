class Solution {
public:
    int maximizeSum(vector<int>& nums, int k) {
        int maxVal = INT_MIN;
        int sum = 0;

        for (const auto& num: nums) {
            maxVal = max(maxVal, num);
        }

        while (k > 0) {
            sum += maxVal;
            k--;
            maxVal++;
        }

        return sum;
    } 
};

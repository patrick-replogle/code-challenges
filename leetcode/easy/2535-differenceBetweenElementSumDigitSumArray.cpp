class Solution {
public:
    int differenceOfSum(vector<int>& nums) {
        int elemSum = 0;
        int digitSum = 0;

        for (const auto num: nums) {
            int curr = num;
            elemSum += num;

            while (curr > 0) {
                int digit = curr % 10;
                digitSum += digit;
                curr /= 10;
            }
        } 
        return abs(elemSum - digitSum);
    }
};

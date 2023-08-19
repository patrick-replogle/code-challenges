class Solution {
public:
    int alternatingSubarray(vector<int>& nums) {
        int output = 0;

        for (int i = 0; i < nums.size() -1 ; i++) {
            int curr = 1;
            bool goingUp = true;

            for (int j = i + 1; j < nums.size(); j++) {
                if (goingUp) {
                    if (nums[j] - nums[j-1] == 1) curr++;
                    else break;
                } else {
                    if (nums[j] - nums[j - 1] == -1) curr++;
                    else break;
                }
                goingUp = !goingUp;
                output = max(output, curr);
            }
        }

        return output <= 1 ? -1 : output;
    }
};

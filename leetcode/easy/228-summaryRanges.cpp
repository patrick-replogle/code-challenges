class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {
        vector<string> output;
        int i = 0;

        while (i < nums.size()) {
            int j = i + 1;
            int curr = nums[i];

            while (j < nums.size() && curr == nums[j] - 1) {
                curr = nums[j];
                j++;
            }

            if (curr == nums.at(i)) {
                output.push_back(to_string(nums.at(i)));
            } else {
                output.push_back(to_string(nums[i]) + "->" + to_string(curr));
            }

            i = j;
        }

        return output;
    }
};

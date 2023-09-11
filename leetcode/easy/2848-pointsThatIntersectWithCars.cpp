class Solution {
public:
    int numberOfPoints(vector<vector<int>>& nums) {
        vector<vector<int>> merged;
        int output = 0;

        sort(nums.begin(), nums.end(), [](vector<int> a, vector<int> b) {
            return a[0] < b[0];
        });

        for (int i = 0; i < nums.size(); i++) {
            int size = merged.size();

            if (merged.size() == 0 || merged[size - 1][1] < nums[i][0]) {
                vector<int> interval {nums[i][0], nums[i][1]};

                merged.push_back(interval);
            } else if (nums[i][1] > merged[size-1][1]) {
                merged[size-1][1] = nums[i][1];
            }
           
        }

        for (int i = 0; i < merged.size(); i++) {
            output += (merged[i][1] - merged[i][0]) + 1;
        }

        return output;
    }
};

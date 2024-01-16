class Solution {
public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
        vector<int> output = {0, 0};
        set<int> nums;
        int maxVal = -1;

        for (const auto& vect: grid) {
            for (const auto& num : vect) {
                if (nums.find(num) != nums.end()) {
                    output[0] = num;
                }
                nums.insert(num);
                maxVal = max(maxVal, num);
            }
        }

        for (int i = 1; i <= maxVal; i++) {
            if (nums.find(i) == nums.end()) {
                output[1] = i;
                break;
            }
        }
        
        if (output[1] == 0) {
            output[1] = maxVal + 1;
        }

        return output;
    }
};

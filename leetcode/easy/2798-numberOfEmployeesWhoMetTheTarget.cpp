class Solution {
public:
    int numberOfEmployeesWhoMetTarget(vector<int>& hours, int target) {
        int output = 0;

        for (const auto &hour: hours) {
            if (hour >= target) output++;
        }

        return output;
    }
};

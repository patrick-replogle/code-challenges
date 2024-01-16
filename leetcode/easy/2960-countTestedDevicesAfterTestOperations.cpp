class Solution {
public:
    int countTestedDevices(vector<int>& batteryPercentages) {
        int output = 0;

        for (const auto& device: batteryPercentages) {
            if (device - output <= 0) continue;
            output++;
        }

        return output;
    }
};

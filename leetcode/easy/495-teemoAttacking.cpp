class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        int output = timeSeries.size() > 0 ? duration : 0;

        for (int i = 1; i < timeSeries.size(); i++) {
            if (timeSeries[i] > timeSeries[i-1] + duration) {
                output += duration;
            } else {
                output += (timeSeries[i] + duration) - (timeSeries[i-1] + duration);
            }
        }

        return output;
    }
};

class Solution {
public:
    bool checkRecord(string s) {
        int absentCount = 0;
        int maxLateCount = 0;
        int currLateCount = 0;

        for (const auto c: s) {
            if (c == 'L') {
                currLateCount++;
                maxLateCount = max(maxLateCount, currLateCount);
            } else {
                currLateCount = 0;
            }

            if (c == 'A') absentCount++;
        }
        return absentCount < 2 && maxLateCount < 3;
    }
};

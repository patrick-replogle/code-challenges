class Solution {
public:
    int distanceTraveled(int mainTank, int additionalTank) {
        int distanceTraveled = 0;
        int mainTankUsed = 0;

        while (mainTank > 0) {
            mainTank--;
            mainTankUsed++;
            distanceTraveled += 10;

            if (mainTankUsed % 5 == 0 && additionalTank > 0) {
                mainTank++;
                additionalTank--;
            }
        }

        return distanceTraveled;
    }
};

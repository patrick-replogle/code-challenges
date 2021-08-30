// first pass solution
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        for (int i = 0; i < gas.length; i++) {
            if (gas[i] < cost[i]) continue;
            int currFuel = gas[i];
            int j = i;
            
            while (true) {
                currFuel -= cost[j];
                if (currFuel < 0) break;
                j++;
                j %= gas.length;
                currFuel += gas[j];
                if (j == i) return i;
            }
        }
        return -1;
    }
}

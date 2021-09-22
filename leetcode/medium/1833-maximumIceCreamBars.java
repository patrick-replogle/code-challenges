// first pass solution
class Solution {
    public int maxIceCream(int[] costs, int coins) {
        int output = 0;
        Arrays.sort(costs);
        
        for (int cost : costs) {
            if (coins - cost >= 0) {
                output++;
                coins -= cost;
            } else {
                break;
            }
        }
        return output;
    }
}

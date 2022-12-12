class Solution {
    public int averageValue(int[] nums) {
        int evenCount = 0;
        int evenSum = 0;

        for (int num : nums) {
            if (num % 2 == 0 && num % 3 == 0) {
                evenCount++;
                evenSum += num;
            }
        }

        if (evenSum == 0) {
            return 0;
        }

        return (int) (evenSum / evenCount);
    }
}

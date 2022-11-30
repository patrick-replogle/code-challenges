class Solution {
    public int distinctAverages(int[] nums) {
        Set<Float> averages = new HashSet<>();
        int minIdx = 0;
        int maxIdx = nums.length - 1;
        Arrays.sort(nums);
        
        while (minIdx < maxIdx) {
            averages.add((float)(nums[minIdx] + nums[maxIdx]) / 2);
            minIdx++;
            maxIdx--;
        }
     
        return averages.size();
    }
}

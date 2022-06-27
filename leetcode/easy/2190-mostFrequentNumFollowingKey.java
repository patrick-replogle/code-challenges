class Solution {
    public int mostFrequent(int[] nums, int key) {
        Map<Integer, Integer> map = new HashMap<>();
        int output = -1;
        int count = 0;
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i-1] == key) {
                map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
                
                if (count < map.get(nums[i])) {
                    output = nums[i];
                    count = map.get(nums[i]);
                }
            }
        }
        return output;
    }
}

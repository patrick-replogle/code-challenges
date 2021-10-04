// first pass solution
class Solution {
    public int majorityElement(int[] nums) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        int target = (int) Math.floor(nums.length / 2) + 1;
        
        for (int num : nums) {
            hashMap.put(num, hashMap.getOrDefault(num, 0) + 1);
            if (hashMap.get(num) == target) return num;
        }
        return -1;
    }
}

// second pass solution
class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        
        return nums[nums.length / 2];
    }
}

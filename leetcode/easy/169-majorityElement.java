// first pass solution
class Solution {
    public int majorityElement(int[] nums) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        int target = (int) Math.floor(nums.length / 2);
        
        for (int num : nums) {
            if (hashMap.containsKey(num)) {
                int count = hashMap.get(num);
                hashMap.put(num, count + 1);
                
                if (count + 1 > target) {
                    return num;
                }
            } else {
                hashMap.put(num, 1);
            }
        }
        return nums[0];
    }
}

// second pass solution
class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        
        return nums[nums.length / 2];
    }
}

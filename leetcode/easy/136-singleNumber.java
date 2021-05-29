// first pass solution
class Solution {
    public int singleNumber(int[] nums) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        
        for (int num : nums) {
            if (hashMap.containsKey(num)) {
                int count = hashMap.get(num);
                hashMap.put(num, count+1);
            } else {
                hashMap.put(num, 1);
            }
        }
        
        for (int key : hashMap.keySet()) {
            if (hashMap.get(key) == 1) {
                return key;
            }
        }
        return -1;
    }
}

// second pass solution
class Solution {
    public int singleNumber(int[] nums) {
        int missingDuplicate = 0;
        
        for (int num : nums) {
            missingDuplicate ^= num;
        }
        return missingDuplicate;
    }
}

class Solution {
    public List<Integer> intersection(int[][] nums) {
        List<Integer> output = new ArrayList<>();
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            for (int num : nums[i]) {
                map.put(num, map.getOrDefault(num, 0) + 1);
            }
        }
        
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() == nums.length) {
                output.add(entry.getKey());
            }
        }
        
        Collections.sort(output);
        
        return output;
    }
}

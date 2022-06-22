class Solution {
    public List<Integer> intersection(int[][] nums) {
        List<Integer> output = new ArrayList<>();
        HashMap<Integer, Set<Integer>> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            for (int num : nums[i]) {
                if (!map.containsKey(num)) map.put(num, new HashSet<>());
                map.get(num).add(i);
            }
        }
        
        for (Map.Entry<Integer, Set<Integer>> entry : map.entrySet()) {
            if (entry.getValue().size() == nums.length) {
                output.add(entry.getKey());
            }
        }
        
        Collections.sort(output);
        
        return output;
    }
}

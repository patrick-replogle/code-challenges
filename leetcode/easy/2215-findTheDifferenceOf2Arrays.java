class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        Map<Integer, Boolean> map = new HashMap<>();
        List<List<Integer>> output = new ArrayList<>();
        List<Integer> list = new ArrayList<>();
        Set<Integer> set = new HashSet<>();
        
        for (int num : nums1) {
            map.put(num, true);
        }
        
        for (int num : nums2) {
            if (map.containsKey(num)) {
                map.put(num, false);
            } else {
                set.add(num);
            }
        }
        
        for (int key : map.keySet()) {
            if (map.get(key)) {
                list.add(key);
            }
        }
        
        output.add(list);
        output.add(set.stream().collect(Collectors.toList()));
        
        return output;
    }
}

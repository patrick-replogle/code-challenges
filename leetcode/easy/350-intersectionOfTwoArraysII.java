// first pass solution
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map1 = new HashMap<>();
        Map<Integer, Integer> map2 = new HashMap<>();
        int outputLength = 0;
        
        for (int num : nums1) {
            map1.put(num, map1.getOrDefault(num, 0) + 1);
        }
        
        for (int num : nums2) {
            map2.put(num, map2.getOrDefault(num, 0) + 1);
        }
        
        for (int key : map1.keySet()) {
            if (map2.containsKey(key)) {
                outputLength += Math.min(map1.get(key), map2.get(key));
            }
        }
        
        int[] output = new int[outputLength];
        int i = 0;
        
        for (int key : map1.keySet()) {
            if (map2.containsKey(key)) {
                int count = Math.min(map1.get(key), map2.get(key));
                while (count > 0) {
                    output[i] = key;
                    i++;
                    count--;
                }
            }
        }
        return output;
    }
}

// second pass solution
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        List<Integer> intersectionList = new ArrayList<>();
        int i = 0;
        int j = 0;
        
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] == nums2[j]) {
                intersectionList.add(nums1[i]);
                i++;
                j++;
            }
            else if (nums1[i] > nums2[j]) {
                j++;
            }
            else {
                i++;
            }
        }
        return intersectionList.stream().mapToInt(Integer::intValue).toArray();
    }
}

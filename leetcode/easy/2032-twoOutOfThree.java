// first pass solution -> messy 
class Solution {
    public List<Integer> twoOutOfThree(int[] nums1, int[] nums2, int[] nums3) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        Set<Integer> set3 = new HashSet<>();
        Set<Integer> output = new HashSet<>();
        int max = Math.max(nums1.length, Math.max(nums2.length, nums3.length));
        
        for (int i = 0; i < max; i++) {
            if (i < nums1.length) set1.add(nums1[i]);
            if (i < nums2.length) set2.add(nums2[i]);
            if (i < nums3.length) set3.add(nums3[i]);
        }
        
        for (int num1 : set1) {
            if (set2.contains(num1) || set3.contains(num1)) {
                output.add(num1);
            }
        }
        
        for (int num1 : set2) {
            if (set1.contains(nums1) || set3.contains(num1)) {
                output.add(num1);
            }
        }
        
        List<Integer> arr = new ArrayList<>();
        
        for (int num : output) arr.add(num);
        
        return arr;
    }
}

// second pass solution 
class Solution {
    public List<Integer> twoOutOfThree(int[] nums1, int[] nums2, int[] nums3) {
        int[] count1 = new int[101];
        int[] count2 = new int[101];
        int[] count3 = new int[101];
        int max = Math.max(nums1.length, Math.max(nums2.length, nums3.length));
        List<Integer> output = new ArrayList<>();
        
        for (int i = 0; i < max; i++) {
            if (i < nums1.length) count1[nums1[i]]++;
            if (i < nums2.length) count2[nums2[i]]++;
            if (i < nums3.length) count3[nums3[i]]++;
        }
        
        for (int i = 0; i < 101; i++) {
            if ((count1[i] > 0 && count2[i] > 0) || 
                (count2[i] > 0 && count3[i] > 0) || 
                (count1[i] > 0 && count3[i] > 0)) {
                output.add(i);
            }
        }
        return output;
    }
}

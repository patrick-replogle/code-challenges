class Solution {
    public int[] sortEvenOdd(int[] nums) {
        List<Integer> odd = new ArrayList<>();
        List<Integer> even = new ArrayList<>();
        
        for (int i = 0; i < nums.length; i++) {
            if (i % 2 == 0) even.add(nums[i]);
            else odd.add(nums[i]);
        }
        
        Collections.sort(odd);
        Collections.sort(even, Collections.reverseOrder());
        
        for (int i = 0; i < nums.length; i++) {
            if (i % 2 == 0) {
                nums[i] = even.remove(even.size() - 1);
            } else {
                nums[i] = odd.remove(odd.size() - 1);
            }
        }
        return nums;
    }
}

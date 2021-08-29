// first pass solution
class Solution {
    public int jump(int[] nums) {
        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> set = new HashSet<>();
        int jumps = 0;
        
        queue.add(0);
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            
            for (int i = 0; i < size; i++) {
                int curr = queue.poll();
                if (curr >= nums.length - 1) return jumps;
                
                for (int j = nums[curr]; j >= 1; j--) {
                    if (!set.contains(curr + j)) {
                        queue.add(curr + j);
                        set.add(curr + j);
                    }
                }
            }
            jumps++;
        }
        return -1;
    }
}

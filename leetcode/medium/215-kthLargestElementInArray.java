// first pass solution
class Solution {
    public int findKthLargest(int[] nums, int k) {
        Queue<Integer> heap = new PriorityQueue<>((a, b) -> b - a);
        
        for (int num : nums) {
            heap.add(num);
        }
        
        while (k > 1) {
            heap.poll();
            k--;
        }
        return heap.poll();
    }
}

// second pass solution
class Solution {
    public int findKthLargest(int[] nums, int k) {
        Queue<Integer> heap = new PriorityQueue<>();
        
        for (int i = 0; i < k; i++) {
            heap.add(nums[i]);
        }
        
        for (int i = k; i < nums.length; i++) {
            if (heap.peek() < nums[i]) {
                heap.poll();
                heap.add(nums[i]);
            }
        }
        return heap.poll();
    }
}

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> hashMap = new HashMap<>();
        int[] output = new int[k];
        Queue<Integer> heap = new PriorityQueue<>(
            (n1, n2) -> hashMap.get(n1) - hashMap.get(n2));
        
        for (int n : nums) {
            if (hashMap.containsKey(n)) {
                hashMap.put(n, hashMap.get(n) + 1);
            } else {
                hashMap.put(n, 1);
            }
        }
        
        for (int key : hashMap.keySet()) {
            heap.add(key);
            if (heap.size() > k) heap.poll();
        }
        
        for (int i = k - 1; i >= 0; i--) {
            output[i] = heap.poll();
        }
        
        return output;
    }
}

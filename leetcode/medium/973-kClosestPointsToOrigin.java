class Solution {
    public int[][] kClosest(int[][] points, int k) {
        int[][] output = new int[k][2];
        Queue<int[]> heap = new PriorityQueue<>(
            (a, b) -> (b[0] * b[0] + b[1] * b[1]) - (a[0] * a[0] + a[1] * a[1]));
        
        for (int[] point : points) {
            heap.add(point);
            if (heap.size() > k) heap.poll();
        }
        
        for (int i = k - 1; i >= 0; i--) {
            output[i] = heap.poll();
        }
        
        return output;
    }
}

class MedianFinder {
    PriorityQueue<Integer> min = new PriorityQueue<>((a, b) -> b - a);
    PriorityQueue<Integer> max = new PriorityQueue<>((a, b) -> a - b);

    public MedianFinder() {}
    
    public void addNum(int num) {
        if (min.isEmpty() || num <= min.peek()) {
            min.add(num);
        } else {
            max.add(num);
        }
        
        if (min.size() < max.size()) {
            min.add(max.poll());
        } else if (min.size() - 1 > max.size()) {
            max.add(min.poll());
        }
    }
    
    public double findMedian() {
        if (min.size() == max.size()) {
            return (double)(min.peek() + max.peek()) / 2;
        } else {
            return (double) min.peek();
        }
    } 
}

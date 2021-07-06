class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        Map<String, Integer> hashMap = new HashMap<>();
        List<String> output = new ArrayList<>();
        PriorityQueue<String> pq = new PriorityQueue<>(
            (a, b) -> hashMap.get(a) == hashMap.get(b) ? a.compareTo(b) : hashMap.get(b) - hashMap.get(a));
        
        for (String word : words) {
           hashMap.put(word, hashMap.getOrDefault(word, 0) + 1);
        }
        
        pq.addAll(hashMap.keySet());
        
        while (pq.peek() != null && output.size() < k) {
            output.add(pq.poll());
        }
        
        return output;
    }
}

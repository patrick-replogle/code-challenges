// first pass solution
class Solution {
    public String frequencySort(String s) {
        String output = "";
        Map<Character, Integer> hashMap = new HashMap<>();
        Queue<Character> heap = new PriorityQueue<>(
        (a, b) -> hashMap.get(b) - hashMap.get(a));
        
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (hashMap.containsKey(c)) {
                hashMap.put(c, hashMap.get(c) + 1);
            } else {
                hashMap.put(c, 1);
            }
        }
        
        for (char c : hashMap.keySet()) {
            heap.add(c);
        }
        
        while (heap.size() > 0) {
            char curr = heap.poll();
            int count = hashMap.get(curr);

            while (count > 0) {
                output += curr;
                count--;
            }
        }
        
        return output;
    }
}

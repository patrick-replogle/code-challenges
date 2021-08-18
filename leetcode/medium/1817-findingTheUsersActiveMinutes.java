// first pass solution
class Solution {
    public int[] findingUsersActiveMinutes(int[][] logs, int k) {
        int[] output = new int[k];
        Map<Integer, Set<Integer>> hashMap = new HashMap<>(); 
        
        for (int[] log : logs) {
            if (!hashMap.containsKey(log[0])) {
                hashMap.put(log[0], new HashSet<>());
            } 
            hashMap.get(log[0]).add(log[1]);
        }
        
        for (int key : hashMap.keySet()) {
            int uam = hashMap.get(key).size();
            output[uam - 1]++;
        }
        
        return output; 
    }
}

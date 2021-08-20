class Solution {
    public int numEquivDominoPairs(int[][] dominoes) {
        Map<String, Integer> map = new HashMap<>();
        int pairs = 0;
              
        for (int[] dom : dominoes) {
            int min = Math.min(dom[0], dom[1]);
            int max = Math.max(dom[0], dom[1]);
            String key = min + ":" + max;
            
            if (map.containsKey(key)) {
                pairs += map.get(key);
            }
            map.put(key, map.getOrDefault(key, 0) + 1);
        }

        return pairs;
    }
}

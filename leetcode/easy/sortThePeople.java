class Solution {
    public String[] sortPeople(String[] names, int[] heights) {
        Map<Integer, Integer> map = new HashMap<>();
        String[] output = new String[names.length];
        int j = heights.length - 1;
        
        for (int i = 0; i < names.length; i++) {
            map.put(heights[i], i);
        }
        
        Arrays.sort(heights);
        
        for (int height : heights) {
            output[j] = names[map.get(height)];
            j--;
        }
        
        return output;
    }
}

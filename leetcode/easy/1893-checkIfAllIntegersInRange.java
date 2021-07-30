// first pass solution
class Solution {
    public boolean isCovered(int[][] ranges, int left, int right) {
        Set<Integer> coveredRanges = new HashSet<>();
        
        for (int[] range : ranges) {
            for (int i = range[0]; i <= range[1]; i++) {
                coveredRanges.add(i);
            }
        }
        
        for (int i = left; i <= right; i++) {
            if (!coveredRanges.contains(i)) {
                return false;
            }
        }
        
        return true;
    }
}

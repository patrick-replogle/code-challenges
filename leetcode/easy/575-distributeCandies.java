// first pass solution
class Solution {
    public int distributeCandies(int[] candyType) {
        Set<Integer> set = new HashSet<>();
        int max = candyType.length / 2;
        
        for (int n : candyType) {
            set.add(n);
            if (set.size() >= max) return max;
        }
        return set.size();
    }
}

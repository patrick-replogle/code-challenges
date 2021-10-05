// first pass solution
class Solution {
    public boolean isHappy(int n) {
        Set<Integer> visited = new HashSet<>();
        
        while (n != 1) {
            if (visited.contains(n)) return false;
            visited.add(n);
            int sum = 0;
            
            while (n != 0) {
                sum += Math.pow(n % 10, 2);
                n = (int) Math.floor(n / 10);
            }
            n = sum;
        }
        return n == 1;
    }
}

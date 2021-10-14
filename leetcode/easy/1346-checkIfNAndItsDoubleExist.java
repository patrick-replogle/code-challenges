// first pass solution
class Solution {
    public boolean checkIfExist(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int num : arr) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        
        for (int num : arr) {
            if (num == 0 && map.get(num) > 1) return true;
            else if (num != 0 && map.containsKey(num * 2)) return true;
        }
        return false;
    }
}

// second pass solution
class Solution {
    public boolean checkIfExist(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        
        for (int num : arr) {
            if (seen.contains(num * 2) || (num % 2 == 0 && seen.contains(num / 2))) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}
